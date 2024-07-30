import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { MovieResult, TvResult } from '@/type';
import { findById } from '@/lib/theMovieDB';

interface Bookmark {
   movieId: number;
   id: string;
   title: string;
   url: string;
   mediaType: string;
}

interface BookmarkContextType {
   bookmarks: Bookmark[];
   movieResult: MovieResult[];
   tvResult: TvResult[];
   refreshBookmarks: () => void;
   fetchBookmarksByIdAndType: () => void;
}

export const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const BookmarkProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
   const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
   const [movieResult, setMovieResult] = useState<MovieResult[]>([]);
   const [tvResult, setTvResult] = useState<TvResult[]>([]);

   const refreshBookmarks = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
         const response = await axios.get('http://localhost:3000/api/bookmarks/getBookmarks', {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         setBookmarks(response.data);
      } catch (error) {
         console.error('Error fetching bookmarks:', error);
      }
   };

   const fetchBookmarksByIdAndType = async () => {
      const promises = bookmarks.map(async ({ mediaType, movieId }) => {
         const result = await findById(movieId, mediaType);
         return { type: mediaType, result };
      });

      const results = await Promise.all(promises);

      const movieResults = results.filter(({ type }) => type === 'movie').map(({ result }) => result);
      const tvResults = results.filter(({ type }) => type === 'tv').map(({ result }) => result);

      setMovieResult(movieResults);
      setTvResult(tvResults);
   };

   useEffect(() => {
      refreshBookmarks();
   }, []);

   useEffect(() => {
      fetchBookmarksByIdAndType();
   }, [bookmarks]);

   return (
      <BookmarkContext.Provider
         value={{ bookmarks, movieResult, tvResult, refreshBookmarks, fetchBookmarksByIdAndType }}
      >
         {children}
      </BookmarkContext.Provider>
   );
};

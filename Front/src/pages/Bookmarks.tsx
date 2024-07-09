import MediaGrid from '@/components/mediaGrid/MediaGrid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { findById } from '@/lib/theMovieDB';
import { MovieResult, TvResult } from '@/type';

interface Bookmark {
   movieId: number;
   id: number;
}

const fetchBookmarks = async (setBookmarks: React.Dispatch<React.SetStateAction<Bookmark[]>>) => {
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

const fetchMedia = async (
   bookmarks: Bookmark[],
   setResult: React.Dispatch<React.SetStateAction<MovieResult[] | TvResult[]>>
) => {
   const mediaPromises = bookmarks.map((bookmark) => findById(bookmark.movieId, 'movie'));
   const mediaResults = await Promise.all(mediaPromises);
   setResult(mediaResults);
};

export default function Bookmarks() {
   const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
   const [result, setResult] = useState<MovieResult[] | TvResult[]>([]);

   useEffect(() => {
      fetchBookmarks(setBookmarks);
   }, []);

   useEffect(() => {
      if (bookmarks.length > 0) {
         fetchMedia(bookmarks, setResult);
      }
   }, [bookmarks]);

   console.log(result, 'result');

   return <MediaGrid titleSection="Bookmarks" dataMedia={result} typeCard="classicCard" />;
}

import { Bookmark, MovieResult, TvResult } from '@/type';
import axios from 'axios';
import { findById } from '@lib/theMovieDB';

export const fetchBookmarks = async (setBookmarks: React.Dispatch<React.SetStateAction<Bookmark[]>>) => {
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

export const fetchBookmarksByIdAndType = async (
   bookmarks: Bookmark[],
   setMovieResult: React.Dispatch<React.SetStateAction<MovieResult[]>>,
   setTvResult: React.Dispatch<React.SetStateAction<TvResult[]>>
) => {
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

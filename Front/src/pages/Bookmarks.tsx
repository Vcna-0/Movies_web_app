import MediaGrid from '@/components/mediaGrid/MediaGrid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { findById } from '@/lib/theMovieDB';

export default function Bookmarks() {
   interface Bookmark {
      movieId: number;
      id: number;
   }
   const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

   const fetchBookmarks = async () => {
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

   useEffect(() => {
      fetchBookmarks();
   }, []);

   const [result, setResult] = useState<any[]>([]);
   useEffect(() => {
      bookmarks.map(async (bookmark) => {
         const media = await findById(bookmark.movieId, 'movie');
         setResult((prev) => [...prev, media]);
      });
   }, [bookmarks]);

   return <MediaGrid titleSection="Bookmarks" dataMedia={result} typeCard="classicCard" />;
}

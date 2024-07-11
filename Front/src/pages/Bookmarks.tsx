import MediaGrid from '@/components/mediaGrid/MediaGrid';
import { useEffect, useState } from 'react';
import { MovieResult, TvResult, Bookmark } from '@/type';
import { fetchBookmarks, fetchBookmarksByIdAndType } from '@/lib/bookmarkService';

export default function Bookmarks() {
   const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
   const [movieResult, setMovieResult] = useState<MovieResult[]>([]);
   const [tvResult, setTvResult] = useState<TvResult[]>([]);

   useEffect(() => {
      fetchBookmarks(setBookmarks);
   }, []);

   useEffect(() => {
      if (bookmarks.length > 0) {
         fetchBookmarksByIdAndType(bookmarks, setMovieResult, setTvResult);
      }
   }, [bookmarks]);

   return (
      <>
         <MediaGrid titleSection="Movies" dataMedia={movieResult} typeCard="classicCard" />
         <MediaGrid titleSection="Tv" dataMedia={tvResult} typeCard="classicCard" />
      </>
   );
}

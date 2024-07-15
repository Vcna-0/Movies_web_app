import MediaGrid from '@/components/mediaGrid/MediaGrid';
import { useEffect } from 'react';
import Menu from '@/components/menu/Menu';
import { StyledHomePage, StyledMain } from './PagesStyles';
import useBookmarks from '@/hooks/useBookmarks';

export default function Bookmarks() {
   const { bookmarks, movieResult, tvResult, refreshBookmarks, fetchBookmarksByIdAndType } = useBookmarks();

   useEffect(() => {
      refreshBookmarks();
   }, []);

   useEffect(() => {
      if (bookmarks.length > 0) {
         fetchBookmarksByIdAndType();
      }
   }, [bookmarks]);

   return (
      <StyledHomePage>
         <Menu />
         <StyledMain>
            <MediaGrid titleSection="Movies bookmarks" dataMedia={movieResult} typeCard="classicCard" />
            <MediaGrid titleSection="Tv bookmarks" dataMedia={tvResult} typeCard="classicCard" />
         </StyledMain>
      </StyledHomePage>
   );
}

import { useContext } from 'react';
import { BookmarkContext } from '@/context/BookmarksContext.tsx';

const useBookmarks = () => {
   const context = useContext(BookmarkContext);
   if (!context) {
      throw new Error('useBookmarks must be used within a BookmarkProvider');
   }
   return context;
};

export default useBookmarks;

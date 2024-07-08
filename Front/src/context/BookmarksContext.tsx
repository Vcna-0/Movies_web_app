import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface Bookmark {
   movieId: number | string;
   id: number;
}

interface BookmarkContextType {
   bookmarks: Bookmark[];
   fetchBookmarks: () => Promise<void>;
}

export const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

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

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
   const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

   useEffect(() => {
      fetchBookmarks(setBookmarks);
   }, []);

   const contextValue = {
      bookmarks,
      fetchBookmarks: () => fetchBookmarks(setBookmarks),
   };

   return <BookmarkContext.Provider value={contextValue}>{children}</BookmarkContext.Provider>;
};

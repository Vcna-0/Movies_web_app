import { HiMiniBookmark, HiOutlineBookmark } from 'react-icons/hi2';
import { StyledButtonBookmark } from './ButtonBookmarkStyle';
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Bookmark } from '../mediaGrid/MediaGrid';

export type ButtonBookmarkProps = {
   idMedia: number;
   buttonCard?: boolean;
   isBookmarked?: boolean;
   refreshBookmarks?: () => void;
};

export default function ButtonBookmark({ idMedia, buttonCard, isBookmarked, refreshBookmarks }: ButtonBookmarkProps) {
   const { user } = useAuth();
   const navigate = useNavigate();
   const token = localStorage.getItem('token');

   const handleBookmarkClick = async () => {
      if (!user) {
         navigate('/login');
         return;
      }

      try {
         const response = await axios.post(
            'http://localhost:3000/api/bookmarks/addBookmarks',
            { idMedia },
            {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            }
         );

         if (response.status === 200) {
            console.log('test');
            if (refreshBookmarks) {
               refreshBookmarks();
            }
         }
      } catch (error) {
         console.error('Error toggling bookmark:', error);
      }
   };

   return (
      <StyledButtonBookmark idMedia={idMedia} buttonCard={buttonCard} onClick={handleBookmarkClick}>
         {/* {isBookmarked ? <HiMiniBookmark /> : <HiOutlineBookmark />} */}
         {isBookmarked ? <HiMiniBookmark /> : <HiOutlineBookmark />}
      </StyledButtonBookmark>
   );
}

ButtonBookmark.defaultProps = {
   buttonCard: false,
};

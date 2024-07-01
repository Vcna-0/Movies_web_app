import { HiMiniBookmark, HiOutlineBookmark } from 'react-icons/hi2';
import { StyledButtonBookmark } from './ButtonBookmarkStyle';
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export type ButtonBookmarkProps = {
   idMedia: number;
   buttonCard?: boolean;
};

export default function ButtonBookmark({ idMedia, buttonCard }: ButtonBookmarkProps) {
   const { user } = useAuth();
   const [isBookmarked, setIsBookmarked] = useState(false);
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
            setIsBookmarked(!isBookmarked);
         }
      } catch (error) {
         console.error('Error toggling bookmark:', error);
      }
   };

   return (
      <StyledButtonBookmark idMedia={idMedia} buttonCard={buttonCard} onClick={handleBookmarkClick}>
         {isBookmarked ? <HiMiniBookmark /> : <HiOutlineBookmark />}
         {/* <HiOutlineBookmark /> */}
         {/* <HiMiniBookmark/>  icon bookmark remplie */}
      </StyledButtonBookmark>
   );
}

ButtonBookmark.defaultProps = {
   buttonCard: false,
};

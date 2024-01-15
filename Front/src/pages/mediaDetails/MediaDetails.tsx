import Menu from '@/components/menu/Menu';
import { useParams } from 'react-router';
import { findById } from '@/lib/theMovieDB';
import { useEffect, useState } from 'react';
import { MediaDetailsType } from '@/type';
import { Navigate } from 'react-router-dom';
import { StyledTitle } from './MediaDetailsStyles';

const IMAGE_ENDPOINT = import.meta.env.VITE_APP_TMDB_IMAGE_ENDPOINT;

export default function MediaDetails() {
   const { id } = useParams<{ id?: string }>();
   const { type } = useParams<{ type?: string }>();
   const [numericId, setNumericId] = useState<number | null>(null);

   const [notFound, setNotFound] = useState(false);
   const [infosMedia, setInfosMedia] = useState<MediaDetailsType | null>(null);

   useEffect(() => {
      const idAsNumber = parseInt(id ?? '', 10);
      if (!isNaN(idAsNumber)) {
         setNumericId(idAsNumber);
      } else {
         console.error('Invalid ID');
         setNotFound(true);
      }
   }, [id]);

   useEffect(() => {
      if (numericId !== null && type !== null) {
         const fetchDetails = async () => {
            try {
               const response = await findById(numericId, type);
               setInfosMedia(response);
            } catch (error) {
               console.error(error);
               setNotFound(true);
            }
         };

         fetchDetails();
      }
   }, [numericId, type]);

   console.log('numericId:', numericId);
   console.log('mediaType:', type);

   if (notFound) {
      return <Navigate to="/Error" />;
   }
   console.log(infosMedia, 'infosMedia');

   function getYearFromDateString(dateString: string) {
      return dateString.split('-')[0];
   }

   return (
      <div>
         <Menu />
         {infosMedia && (
            <main>
               <StyledTitle>
                  {infosMedia.title || infosMedia.name}{' '}
                  {getYearFromDateString(infosMedia.release_date) || getYearFromDateString(infosMedia.first_air_date)}
               </StyledTitle>
               <img src={`${IMAGE_ENDPOINT}/original${infosMedia.poster_path}`} alt="" />
            </main>
         )}
      </div>
   );
}

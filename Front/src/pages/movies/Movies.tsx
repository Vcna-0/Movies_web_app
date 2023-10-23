import { useEffect, useState } from 'react';
import { MovieResult, TvResult } from '../../type';
import { getMovieByPopularity } from '@/lib/theMovieDB';
import Menu from '@components/menu/Menu';
import SearchBar from '@components/searchBar/SearchBar';
import MediaGrid from '@/components/mediaGrid/MediaGrid';
import { StyledHomePage, StyledMain } from '../PagesStyles';
import { TbMovie } from 'react-icons/tb';

export default function Movies() {
   const [userQuery, setUserQuery] = useState<string>('');
   const [searchResults, setSearchResults] = useState<Array<MovieResult | TvResult>>([]);
   const [popularMovieList, setPopularMovieList] = useState<Array<MovieResult | TvResult>>([]);

   useEffect(() => {
      getMovieByPopularity().then(setPopularMovieList).catch(console.error);
   }, []);

   return (
      <StyledHomePage>
         <Menu />
         <StyledMain>
            <SearchBar
               placeholderTxt="Search for movies"
               setSearchResults={setSearchResults}
               setUserQuery={setUserQuery}
               typeOfResearch="movie"
            />
            {searchResults.length > 0 ? (
               <MediaGrid
                  dataMedia={searchResults}
                  typeCard="classicCard"
                  titleSection={`Found ${searchResults.length} results for ${userQuery}`}
               />
            ) : (
               <>
                  <MediaGrid
                     dataMedia={popularMovieList}
                     typeCard="popularCard"
                     titleSection={
                        <>
                           <TbMovie /> Popular Movies
                        </>
                     }
                  />
               </>
            )}
         </StyledMain>
      </StyledHomePage>
   );
}

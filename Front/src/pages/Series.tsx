import { useEffect, useState } from 'react';
import { MovieResult, TvResult } from '@type';
import { getTvByPopularity } from '@/lib/theMovieDB';
import Menu from '@components/menu/Menu';
import SearchBar from '@components/searchBar/SearchBar';
import MediaGrid from '@/components/mediaGrid/MediaGrid';
import { StyledHomePage, StyledMain } from './PagesStyles';
import IconTV from '@assets/IconTVserieWhite.svg';

export default function Series() {
   const [userQuery, setUserQuery] = useState<string>('');
   const [searchResults, setSearchResults] = useState<Array<MovieResult | TvResult>>([]);
   const [popularMovieList, setPopularMovieList] = useState<Array<MovieResult | TvResult>>([]);

   useEffect(() => {
      getTvByPopularity().then(setPopularMovieList).catch(console.error);
   }, []);

   return (
      <StyledHomePage>
         <Menu />
         <StyledMain>
            <SearchBar
               placeholderTxt="Search for TV series"
               setSearchResults={setSearchResults}
               setUserQuery={setUserQuery}
               typeOfResearch="tv"
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
                           <img src={IconTV} alt="" /> TV Series
                        </>
                     }
                  />
               </>
            )}
         </StyledMain>
      </StyledHomePage>
   );
}

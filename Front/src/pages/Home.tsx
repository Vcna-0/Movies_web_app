import { useEffect, useState } from 'react';
import { MovieResult, TvResult } from '@type';
import { getTrending, getMovieByPopularity, getTvByPopularity } from '@lib/theMovieDB';
import Menu from '@components/menu/Menu';
import SearchBar from '@components/searchBar/SearchBar';
import TrendingSlider from '@/components/shared/sliders/trendingSlider/TrendingSlider';
import MediaGrid from '@components/mediaGrid/MediaGrid';
import ScrollToTopButton from '@components/scrollToTopButton/ScrollToTopButton';
import useMobileDetect from '@hooks/useMobileDetect';
import { StyledHomePage, StyledMain } from './PagesStyles';
import IconMovie from '@assets/IconMovieWhite.svg';
import IconTV from '@assets/IconTVserieWhite.svg';

export default function Home() {
   const [userQuery, setUserQuery] = useState<string>('');
   const [searchResults, setSearchResults] = useState<Array<MovieResult | TvResult>>([]);
   const [trendingList, setTrendingList] = useState<Array<MovieResult | TvResult>>([]);
   const [popularMovieList, setPopularMovieList] = useState<Array<MovieResult | TvResult>>([]);
   const [popularTvList, setPopularTvList] = useState<Array<MovieResult | TvResult>>([]);

   const isMobile = useMobileDetect();

   useEffect(() => {
      getTrending().then(setTrendingList).catch(console.error);
   }, []);

   useEffect(() => {
      getMovieByPopularity().then(setPopularMovieList).catch(console.error);
   }, []);

   useEffect(() => {
      getTvByPopularity().then(setPopularTvList).catch(console.error);
   }, []);

   return (
      <StyledHomePage>
         <Menu />
         <StyledMain>
            <SearchBar
               placeholderTxt="Search for movies or TV series"
               setSearchResults={setSearchResults}
               setUserQuery={setUserQuery}
               typeOfResearch="multi"
            />
            {searchResults.length > 0 ? (
               <MediaGrid
                  dataMedia={searchResults}
                  typeCard="classicCard"
                  titleSection={`Found ${searchResults.length} results for ${userQuery}`}
               />
            ) : (
               <>
                  <TrendingSlider data={trendingList} />
                  <MediaGrid
                     dataMedia={popularMovieList}
                     typeCard="classicCard"
                     titleSection={
                        <>
                           <img src={IconMovie} alt="" /> Movies
                        </>
                     }
                  />
                  <MediaGrid
                     dataMedia={popularTvList}
                     typeCard="classicCard"
                     titleSection={
                        <>
                           <img src={IconTV} alt="" /> TV Series
                        </>
                     }
                  />
               </>
            )}
         </StyledMain>
         {isMobile && <ScrollToTopButton />}
      </StyledHomePage>
   );
}

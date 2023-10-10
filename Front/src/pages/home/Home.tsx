import { useEffect, useState } from 'react';
import { MovieResult, TvResult } from '../../type';
import { getTrending, getMovieByPopularity, getTvByPopularity } from '@/lib/theMovieDB';
import Menu from '@components/menu/Menu';
import SearchBar from '@components/searchBar/SearchBar';
import MediaGrid from '@/components/mediaGrid/MediaGrid';
import TrendingSlider from '@/components/trendingSlider/TrendingSlider';
import { StyledHomePage, StyledMain } from './HomeStyles';

export default function Home() {
   const [userQuery, setUserQuery] = useState<string>('');
   const [searchResults, setSearchResults] = useState<Array<MovieResult | TvResult>>([]);
   const [trendingList, setTrendingList] = useState<Array<MovieResult | TvResult>>([]);
   const [popularMovieList, setPopularMovieList] = useState<Array<MovieResult | TvResult>>([]);
   const [popularTvList, setPopularTvList] = useState<Array<MovieResult | TvResult>>([]);

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
            />
            {searchResults.length > 0 ? (
               <MediaGrid
                  dataMedia={searchResults}
                  typeCard="classicCard"
                  titleSection={`Found ${searchResults.length} results for ${userQuery}`}
               />
            ) : (
               <>
                  <TrendingSlider dataTrending={trendingList} type="trendingCard" />
                  <MediaGrid dataMedia={popularMovieList} typeCard="classicCard" titleSection="Popular Movies" />
                  <MediaGrid dataMedia={popularTvList} typeCard="classicCard" titleSection="Popular Tv" />
               </>
            )}
         </StyledMain>
      </StyledHomePage>
   );
}

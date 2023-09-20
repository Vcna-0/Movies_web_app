import { useState } from 'react';
import Menu from "@components/menu/Menu";
import SearchBar from "@components/searchBar/SearchBar";
import Card from "@/components/card/Card";
import { MovieResult, TvResult } from '../../type';
import { StyledHomePage, StyledMain, StyledResult, StyledParagraph, StyledGridResults } from './HomeStyles';
import TrendingSlider from "@/components/trendingSlider/TrendingSlider";


export default function Home() {
	const [userQuery, setUserQuery] = useState<string>('');
	const [searchResults , setSearchResults ] = useState<Array<MovieResult | TvResult>>([]);
	const allowedMediaTypes = ['movie', 'tv', 'tv_episode'];

	return (
	<StyledHomePage>
		<Menu />
		<StyledMain>
			<SearchBar placeholderTxt="Search for movies or TV series" setSearchResults={setSearchResults} setUserQuery={setUserQuery}/>
			{searchResults.length > 0 ? (
				<StyledResult>
					<StyledParagraph>Found {searchResults.length} results for {userQuery}</StyledParagraph>
					<StyledGridResults>
						{searchResults
							.sort((a, b) => b.popularity - a.popularity) 
							.map((result) => (
								allowedMediaTypes.includes(result.media_type) && (
									<Card key={result.id} result={result} />
								)
							))
						}
					</StyledGridResults>
				</StyledResult>
			) : (
				// <p>no result</p>
				<TrendingSlider searchResults={searchResults} />
			)}
		</StyledMain>
	</StyledHomePage>
	)
}

import { useState } from 'react';
import Menu from "@components/menu/Menu";
import SearchBar from "@components/searchBar/SearchBar";
import MovieCard from "@components/movieCard/MovieCard";
import { MovieResult, TvResult } from '../../type';
import { StyledHomePage, StyledMain, StyledResult, StyledParagraph, StyledGridResults } from './HomeStyles';


export default function Home() {
	const [searchName, setSearchName] = useState<string>('');
	const [searchResults, setSearchResults] = useState<Array<MovieResult | TvResult>>([]);
	const allowedMediaTypes = ['movie', 'tv', 'tv_episode'];

	return (
	<StyledHomePage>
		<Menu />
		<StyledMain>
			<SearchBar placeholderTxt="Search for movies or TV series" setSearchResults={setSearchResults} setSearchName={setSearchName}/>
			{searchResults.length > 0 ? (
				<StyledResult>
					<StyledParagraph>Found {searchResults.length} results for {searchName}</StyledParagraph>
					<StyledGridResults>
						{searchResults
							.sort((a, b) => b.popularity - a.popularity) 
							.map((result) => (
								allowedMediaTypes.includes(result.media_type) && (
									<MovieCard key={result.id} result={result} />
								)
							))
						}
					</StyledGridResults>
				</StyledResult>
			) : (
				<p>no result</p>
			)}
		</StyledMain>
	</StyledHomePage>
	)
}

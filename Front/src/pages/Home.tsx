import { useState } from 'react';
import Menu from "@components/menu/Menu";
import SearchBar from "@components/searchBar/SearchBar";
import { MovieResult, TvResult } from '../type';


export default function Home() {
	const [searchName, setSearchName] = useState<string>('');
	const [searchResults, setSearchResults] = useState<Array<MovieResult | TvResult>>([]);
	
	console.log("Resultat de recherche", searchResults)
	return (
		<div>
			<Menu />
			<SearchBar setSearchResults={setSearchResults} setSearchName={setSearchName}/>
			
			<p>Found {searchResults.length} results for {searchName}</p>
			{searchResults.map((result) => (
				<div key={result.id}>
					<h2>{result.title}</h2>
					<img src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`} alt={result.title} />
				</div>
			))}
		</div>
	)
}

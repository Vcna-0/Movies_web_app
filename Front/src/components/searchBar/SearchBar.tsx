import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { MovieResult, TvResult, IFormInputSearch } from '../../type';
import {StyledForm, StyledInput, SearchIcon} from './SearchBarStyles';


type Props = {
	setSearchResults: React.Dispatch<React.SetStateAction<(MovieResult | TvResult)[]>>;
	setSearchName: React.Dispatch<React.SetStateAction<string>>;
}


export default function SearchBar ({setSearchResults, setSearchName}: Props) {

    const { register, handleSubmit } = useForm<IFormInputSearch>();
	const API_KEY = import.meta.env.VITE_APP_API_KEY;

	const onSubmit: SubmitHandler<IFormInputSearch> = (data) => {
		console.log("Nom de la recherche", data)
		setSearchName(data.searchName);
        handleSearch(data.searchName);
    }

	const handleSearch = async (searchName : string) => {
		try {
			const movieResponse = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchName}&api_key=${API_KEY}`);
			const movieResults = movieResponse.data.results;

			const tvResponse = await axios.get(`https://api.themoviedb.org/3/search/tv?query=${searchName}&api_key=${API_KEY}`);
			const tvResults = tvResponse.data.results;
			
			const allResults: Array<MovieResult | TvResult> = [...movieResults, ...tvResults];
			setSearchResults(allResults);

		} catch (error) {
			console.error('Erreur lors de l\'appel API :', error);
		}
    };	


	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			<SearchIcon />
			<StyledInput
				type="text"
				placeholder="Search for movies or TV series"
				{...register('searchName')}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
					e.preventDefault();
					handleSubmit(onSubmit)();
					}
				}}
			/>
		</StyledForm>
	)
}

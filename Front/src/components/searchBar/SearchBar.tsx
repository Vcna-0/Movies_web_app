import { SubmitHandler, useForm } from 'react-hook-form';
import { MovieResult, TvResult, IFormInputSearch } from '../../type';
import { StyledForm, StyledInput, SearchIcon } from './SearchBarStyles';
import { getByName } from '@/lib/theMovieDB';

type Props = {
   setUserQuery: React.Dispatch<React.SetStateAction<string>>;
   setSearchResults: React.Dispatch<React.SetStateAction<(MovieResult | TvResult)[]>>;
   placeholderTxt: string;
};

export default function SearchBar({ placeholderTxt, setSearchResults, setUserQuery }: Props) {
   const { register, handleSubmit } = useForm<IFormInputSearch>();

   const onSubmit: SubmitHandler<IFormInputSearch> = async (data) => {
      setUserQuery(data.searchName);
      setSearchResults(await getByName(data.searchName));
   };

   return (
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
         <SearchIcon />
         <StyledInput
            type="text"
            placeholder={placeholderTxt}
            {...register('searchName')}
            onKeyDown={(e) => {
               if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSubmit(onSubmit)();
               }
            }}
         />
      </StyledForm>
   );
}

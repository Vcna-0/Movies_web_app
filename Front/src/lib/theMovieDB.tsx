const API_KEY = import.meta.env.VITE_APP_API_KEY;
const TMDB_ENDPOINT = import.meta.env.VITE_APP_TMDB_ENDPOINT;
import { MovieResult, TvResult } from '@/type';

export async function getByName(name: string, type: string) {
   try {
      const res = await fetch(`${TMDB_ENDPOINT}/search/multi?include_adult=false&query=${name}&api_key=${API_KEY}`);

      if (type === 'multi') return (await res.json()).results as (MovieResult | TvResult)[];
      else {
         const results = (await res.json()).results as (MovieResult | TvResult)[];
         return results.filter((result) => result.media_type === type);
      }
   } catch (err) {
      return console.error(err);
   }
}

export async function getTrending() {
   try {
      const res = await fetch(`${TMDB_ENDPOINT}/trending/all/day?api_key=${API_KEY}&language=fr-FR`);
      return (await res.json()).results;
   } catch (err) {
      return console.error(err);
   }
}

export async function getMovieByPopularity() {
   try {
      const res = await fetch(`${TMDB_ENDPOINT}/movie/popular?api_key=${API_KEY}&language=fr-FR`);
      const movies = (await res.json()).results.map((movie: MovieResult) => ({
         ...movie,
         media_type: 'movie',
      }));
      return movies;
   } catch (err) {
      return console.error(err);
   }
}

export async function getTvByPopularity() {
   try {
      const res = await fetch(`${TMDB_ENDPOINT}/tv/popular?api_key=${API_KEY}&language=fr-FR`);
      const tvShows = (await res.json()).results.map((tvShow: TvResult) => ({
         ...tvShow,
         media_type: 'tv',
      }));
      return tvShows;
   } catch (err) {
      return console.error(err);
   }
}

export async function findById(id: number, mediaType: string) {
   try {
      const res = await fetch(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${API_KEY}&language=fr-FR`);
      return await res.json();
   } catch (err) {
      return console.error(err);
   }
}

export async function getMovieCast(id: number) {
   try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`);
      return await res.json();
   } catch (err) {
      return console.error(err);
   }
}

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const TMDB_ENDPOINT = import.meta.env.VITE_APP_TMDB_ENDPOINT;

export async function getByName(name: string) {
   try {
      const res = await fetch(`${TMDB_ENDPOINT}/search/multi?include_adult=false&query=${name}&api_key=${API_KEY}`);
      return (await res.json()).results;
   } catch (err) {
      return console.error(err);
   }
}

export async function getTrending() {
   try {
      const res = await fetch(`${TMDB_ENDPOINT}/trending/all/day?api_key=${API_KEY}`);
      return (await res.json()).results;
   } catch (err) {
      return console.error(err);
   }
}

export async function getMovieByPopularity() {
   try {
      const res = await fetch(`${TMDB_ENDPOINT}/movie/popular?api_key=${API_KEY}`);
      return (await res.json()).results;
   } catch (err) {
      return console.error(err);
   }
}

export async function getTvByPopularity() {
   try {
      const res = await fetch(`${TMDB_ENDPOINT}/tv/popular?api_key=${API_KEY}`);
      return (await res.json()).results;
   } catch (err) {
      return console.error(err);
   }
}

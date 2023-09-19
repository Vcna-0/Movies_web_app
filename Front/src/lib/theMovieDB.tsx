const API_KEY = import.meta.env.VITE_APP_API_KEY;
const TMDB_ENDPOINT = import.meta.env.VITE_APP_TMDB_ENDPOINT;

export async function getByName(name: string){
    try {
        const res = await fetch(`${TMDB_ENDPOINT}/search/multi?include_adult=false&query=${name}&api_key=${API_KEY}`);
        return (await res.json()).results;
    } catch (err) {
        return console.error(err);
    }
}
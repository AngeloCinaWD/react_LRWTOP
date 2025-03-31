// creo un file per gestire le api calls
// il file è .js perchè devo restituire funzioni .js non mi interessa restituire html

// apikey
const API_KEY = '00fc6f8f5568da14692dfb2724b20a69';
// URL api
const BASE_URL = 'https://api.themoviedb.org/3';

// esporto la funzione per fetchare i movies
// la funzione è async, codice asincrono deve essere eseguito in background
export const getPopularMovies = async () => {
  // Application level authentication would generally be considered the default way of authenticating yourself on the API. Version 3 is controlled by one of either a single query parameter, api_key, or by using your access token as a Bearer token. You can request an API key by logging in to your account on TMDB and clicking here
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

  const data = await response.json();

  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    // encodeURIComponent rimuove tutti quei caratteri che non possono essere passati tramite url
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};

// apikey
const API_KEY = '00fc6f8f5568da14692dfb2724b20a69';
// URL api
const BASE_URL = 'https://api.themoviedb.org/3';

export const getBaseUrlImages = async () => {
  const response = await fetch(`${BASE_URL}/configuration?api_key=${API_KEY}`);

  const data = await response.json();

  return `${data.images.base_url}${data.images.poster_sizes['4']}`;
};

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

  const data = await response.json();

  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};

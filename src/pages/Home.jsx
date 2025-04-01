import '../css/Home.css';
import MovieCard from '../components/MovieCard';
import { useState, useEffect } from 'react';
import {
  getBaseUrlImages,
  getPopularMovies,
  searchMovies,
} from '../services/api';

function Home() {
  // gli state definiti in un componente sono visibili solo nel componente stesso, a meno che non li passiamo ad un altro componente tramite prop, da parent a children da parent a children e così via tra i componenti annidati (Prop Drilling)
  // per avere dati disponibili per tutti i componenti o pagine si utilizza il context di react
  // a context will allow state to be globally available to anything that's within the provided context
  // un esempio è contrassegnare un movie come favorito in homepage e quando si va nella favorites page si hanno solo quelli favoriti
  // creo una nuova folder in src: contexts e dentro un file MoviesContext.jsx
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [baseUrlImages, setBaseUrlImages] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        const baseUrlImagesResponse = await getBaseUrlImages();
        setMovies(popularMovies);
        setBaseUrlImages(baseUrlImagesResponse);
      } catch (error) {
        console.log(error);

        setError('Failed to load movies...');
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim() || loading) {
      return;
    }

    setLoading(true);
    try {
      const searchedMovies = await searchMovies(searchQuery);
      setMovies(searchedMovies);
      setError(false);
    } catch (error) {
      console.log(error);
      setError('Failed to search movies...');
    } finally {
      setLoading(false);
    }

    setSearchQuery('');
  };

  return (
    <>
      <div className='home'>
        <form
          onSubmit={handleSearch}
          className='search-form'
        >
          <input
            type='text'
            placeholder='Search for movies...'
            className='search-input'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type='submit'
            className='search-button'
          >
            Search
          </button>
        </form>

        {error && <div className='error-message'>{error}</div>}

        {loading ? (
          <div className='loading'>Loading...</div>
        ) : (
          <div className='movies-grid'>
            {movies.map(
              (movie) =>
                movie.title
                  .toLowerCase()
                  .startsWith(searchQuery.toLowerCase()) && (
                  <MovieCard
                    movie={movie}
                    imgUrl={baseUrlImages}
                    key={movie.id}
                  />
                )
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;

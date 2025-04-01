import '../css/Home.css';
import MovieCard from '../components/MovieCard';
// importo l'hook useEffect() che ci permette di gestire le chiamate API
import { useState, useEffect } from 'react';
import {
  getBaseUrlImages,
  getPopularMovies,
  searchMovies,
} from '../services/api';

function Home() {
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

  // il metodo è asincrono
  const handleSearch = async (e) => {
    e.preventDefault();
    // alert(searchQuery);
    // per cercare i film secondo titolo devo inviare l'input inserito alla funzione searchMovies()
    // prima si controlla che la ricerca parta se searchQuery non è una stringa vuota o un insieme di spazi, cioè l'utente potrebbe fare spazio spazio spazio ed inviare, lo spazio è un carattere quindi verrebbe passato qualcosa
    // per accertarmi che non sia questo caso utilizzo il metodo .trim() sull'input inviato, questo mi restituisce la strina ripulita da spazi bianchi
    // se è un insieme di spazi mi restituisce un empty string che è un falsy, quindi se è falsy con il ! mi restituisce true e blocco la funzione tramite return
    // inoltre non deve essere in corso un altro caricamento
    if (!searchQuery.trim() || loading) {
      return;
    }

    // se l'input va bene setto loading a true, al momento è false perchè dopo la chiamata per i movies più popolari viene settata a false
    setLoading(true);
    // invio chiamata
    // utilizzo try catch finally block
    try {
      // invio chiamata
      const searchedMovies = await searchMovies(searchQuery);

      // setto i movies con il risultato della query
      setMovies(searchedMovies);
      // setto error a false
      setError(false);
    } catch (error) {
      console.log(error);
      // setto eventuale errore e verrà mostrato il messaggio
      setError('Failed to search movies...');
    } finally {
      // interrompo il caricamento
      setLoading(false);
    }

    // setSearchQuery('');
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

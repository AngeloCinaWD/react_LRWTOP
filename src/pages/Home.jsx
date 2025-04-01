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

  // mi serve uno state per i movies
  const [movies, setMovies] = useState([]);

  // mi creo uno state per l'url delle immagini
  // lo passo ad ogni componente MovieCard tramite props
  const [baseUrlImages, setBaseUrlImages] = useState('');

  // state per gi errori delle call api
  const [error, setError] = useState(null);

  // state per il loading
  const [loading, setLoading] = useState(true);

  // useEffect allows you to add side effects to your functions or to your components and define when they should run
  // la funzione viene chiamata quando quello che c'è nell'array cambia
  // dependencies array, quando una dependencies ndicata cambia viene re-renderizzato il componente
  // se non c'è niente nell'array, array vuoto, vuol dire che la funzione deve essere chiamata una sola volta, quando il componente viene renderizzato la prima volta
  // lo useEffect serve perchè evita che qualcosa venga ricalcolato ogni volta che il componente viene rirenderizzato, anche se il valore non è cambiato
  useEffect(() => {
    const loadPopularMovies = async () => {
      // blocco try catch finally per gestire un async await
      try {
        // uso await perchè la funzione che chiamo è async e quindi mi ritorna una response
        const popularMovies = await getPopularMovies();
        const baseUrlImagesResponse = await getBaseUrlImages();
        // setto i movies
        setMovies(popularMovies);
        setBaseUrlImages(baseUrlImagesResponse);
        // console.log(baseUrlImagesResponse);
        // console.log(movies);
      } catch (error) {
        // quando si gestiscono le chiamate API è norma avere uno state anche per gli errori
        console.log(error);

        setError('Failed to load movies...');
      } finally {
        // settiamo il loading a false, qualunque sia il risultato della call è finito il caricamento
        setLoading(false);
      }
    };

    // chiamo la funzione che ho creato
    loadPopularMovies();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
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

        {/* messaggio di errore in caso di chiamata api non riuscita */}
        {/* sfrutto lo state error e la short-circuit evaluation*/}

        {error && <div className='error-message'>{error}</div>}

        {/* voglio che si visualizzi uno spinner di caricamento */}
        {/* per farlo sfrutto lo state loading e l'operatore ternario */}
        {/* se loading è true si vede il div con lo spinner altrimenti il div contenente i movies */}
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

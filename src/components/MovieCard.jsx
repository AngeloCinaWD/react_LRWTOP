import '../css/MovieCard.css';
// importo il MovieContext tramite lo useContext() che ho settato
// lo useContext mi permette di accedere alle funzioni del context
import { useMovieContext } from '../contexts/MoviesContext';

function MovieCard({ movie, imgUrl }) {
  // salvo le funzioni del context che mi servono in const
  // è uno state
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();

  // voglio sapere se il movie è favorite
  const favorite = isFavorite(movie.id);

  function onFavoriteClick() {
    // in questa funzione controllo se il movie è favorite o no
    // se è favorite deve diventare unfavorite, altrimenti il contrario
    favorite ? removeFromFavorites(movie.id) : addToFavorites(movie);
  }

  return (
    <div className='movie-card'>
      <div className='movie-poster'>
        <img
          src={`${imgUrl}${movie.poster_path}`}
          alt={movie.title}
        />
        <div className='movie-overlay'>
          <button
            // se il movie è favorite aggiungo la classe active altrimenti stringa vuota, quindi niente classe
            // className='favorite-btn'
            className={`favorite-btn ${favorite ? 'active' : ''}`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className='movie-info'>
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split('-')[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;

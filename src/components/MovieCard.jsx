import '../css/MovieCard.css';

function MovieCard({ movie, imgUrl }) {
  function onFavoriteClick() {
    alert('clicked');
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
            className='favorite-btn'
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className='movie-info'>
        <h3>{movie.title}</h3>
        {/* The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array. */}
        {/* la data arriva così 2025-12-24, quindi splitto per - */}
        <p>{movie.release_date?.split('-')[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;

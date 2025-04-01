import '../css/Favorites.css';
// importo il MovieContext tramite useContext()
import { useMovieContext } from '../contexts/MoviesContext';
import MovieCard from '../components/MovieCard';
import { useEffect, useState } from 'react';
import { getBaseUrlImages } from '../services/api';

function Favorites() {
  // per avere i film favoriti
  const { favorites } = useMovieContext();

  const [baseUrlImages, setBaseUrlImages] = useState('');

  useEffect(() => {
    const getBaseUrl = async () => {
      const baseUrl = await getBaseUrlImages();
      setBaseUrlImages(baseUrl);
    };

    getBaseUrl();
  }, []);

  return (
    <>
      {favorites && favorites.length > 0 ? (
        <div className='favorites'>
          <h2>Your Favorites</h2>
          <div className='movies-grid'>
            {favorites.map((movie) => (
              <MovieCard
                movie={movie}
                imgUrl={baseUrlImages}
                key={movie.id}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className='favorites-empty'>
          <h2>No Favorite Movies yet</h2>
          <p>Start adding movies to your favorite and they will appear here</p>
        </div>
      )}
    </>
  );
}

export default Favorites;

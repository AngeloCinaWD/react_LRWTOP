import '../css/Home.css';
import MovieCard from '../components/MovieCard';
import { useState } from 'react';
import { getPopularMovies } from '../services/api';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  console.log(getPopularMovies());

  // quello che vogliamo fare è rendere la const movies dinamica, cioè l'array di film si deve riempire con la response di una call ad una API
  // creo una folder services in src
  const movies = [
    { id: 1, title: 'John Wick', release_date: '2020' },
    { id: 2, title: 'Terminator', release_date: '2021' },
    { id: 3, title: 'Rambo', release_date: '2022' },
    { id: 4, title: 'John Wick 2', release_date: '2023' },
  ];

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

        <div className='movies-grid'>
          {movies.map(
            (movie) =>
              movie.title
                .toLowerCase()
                .startsWith(searchQuery.toLowerCase()) && (
                <MovieCard
                  movie={movie}
                  key={movie.id}
                />
              )
          )}
        </div>
      </div>
    </>
  );
}

export default Home;

// creo un file Home.jsx che voglio sia la mia homepage che contenga una lista di movies
// importo il componente MovieCard
import MovieCard from '../components/MovieCard';

// creo il componente
function Home() {
  // ho bisogno di una property che contenga tutti i film da mostrare
  const movies = [
    { id: 1, title: 'John Wick', release_date: '2020' },
    { id: 2, title: 'John Wick 2', release_date: '2021' },
    { id: 3, title: 'John Wick 3', release_date: '2022' },
    { id: 4, title: 'John Wick 4', release_date: '2023' },
  ];

  // funzione richiamata al submit del form
  const handleSearch = () => {};

  return (
    <>
      <div className='home'>
        {/* inserisco un form tag con un input tag per la ricerca del film */}
        {/* quando submitto il form viene chiamata una certa funzione */}
        <form
          onSubmit={handleSearch}
          className='search-form'
        >
          <input
            type='text'
            placeholder='Search for movies...'
            className='search-input'
          />
          {/* button per submittare il form */}
          <button
            type='submit'
            className='search-button'
          >
            Search
          </button>
        </form>

        <div className='movies-grid'>
          {/* utilizzo il .map() per ciclare l'array movies */}
          {/* per ogni elemento dell'array movies voglio che venga creato un MovieCard component al quale passiamo tramite prop movie le info di ogni movie e ne definiamo la key che deve essere un valore univoco (gli passo l'id del movie) */}
          {/* l'identificatore unico key serve a React per capire con quale componente sta interagendo o deve interagire in caso di modifiche o nuove renderizzazioni */}
          {movies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;

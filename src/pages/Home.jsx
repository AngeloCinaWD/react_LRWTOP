import MovieCard from '../components/MovieCard';
// per gestire lo STATE di un'app react utlizziamo l'hook useState
import { useState } from 'react';

// creo il componente
function Home() {
  // lo STATE è qualcosa che una volta aggiornato, il componente cambierà e renderizzerà se stesso per mostrare il nuovo STATE
  // per convenzione quando si utilizza l'hook useState() si destrttura l'array che ritorna questo hook in 2 const
  // la prima sarà il valore dello state attuale, la seconda una funzione per aggiornare questo valore e le si dà il nome preceduto da set
  // all'hook si dà il valore che deve avere di default quello state, in questo caso diamo stringa vuota che sarà rimpiazzata dal valore inserito nell'input per la ricerca del film
  // ogni volta che aggiorneremo uno state il componente si rerenderizzerà secondo il nuovo state
  const [searchQuery, setSearchQuery] = useState('');

  const movies = [
    { id: 1, title: 'John Wick', release_date: '2020' },
    { id: 2, title: 'Terminator', release_date: '2021' },
    { id: 3, title: 'Rambo', release_date: '2022' },
    { id: 4, title: 'John Wick 2', release_date: '2023' },
  ];

  console.log(searchQuery);

  // passo l'evento submit come argomento
  const handleSearch = (e) => {
    // al click del button submit avrò un alert con il valore che ha in quel momento lo state searchQuery
    // un event submit refresha la pagina, per evitare questo devo utilizzare il metodo preventDefault() dell'evento
    e.preventDefault();
    alert(searchQuery);
    // dopo aver mostrato il valore di input nell'alert, setto di nuovo il valore a stringa vuota, in questo modo il campo di input sarà di nuovo vuoto
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
            // nell'input setto il suo value collegandolo al searchQuery state
            value={searchQuery}
            // poi tramite event onChange vado ad aggiornare il valore dello state searchQuery tramite funzione setSearchQuery, passandogli quello che viene inserito nell'input tag
            // all'onChange passo una funzione che ha come argomento l'evento e nel codice della funzione passo il value dell'input ricavato dall'evento
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
          {/* voglio aggiustare questo .map() in modo che vengano renderizzati solo i film che hanno il titolo che inizia con quello che viene passata in input, quindi il value dell'input*/}
          {movies.map(
            (movie) =>
              // per farlo trasformo il titolo in lowercase e poi concateno il metodo startsWith() passandogli searchQuery (se passo un carattere maiuscolo nell'input non lo trova, metto il toLowerCase() anche al searchQuery)
              // inoltre utilizzo lo short-circuit evaluation && in modo che se questa condizione è vera mi renderizzerà anche il MovieCard altrimenti si blocca al false e non fa niente
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

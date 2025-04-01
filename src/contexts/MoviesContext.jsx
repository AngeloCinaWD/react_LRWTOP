// importo diverse cose da react
import { useState, useEffect, createContext, useContext } from 'react';

// creo un context
const MovieContext = createContext();

//
export const useMovieContext = () => useContext(MovieContext);

// creo un provider
// provide state to any of the components that are wrapped around it
// viene definito lo state che può essere utilizzato globalmente o solo in alcune parti dell'app, dipende da cosa wrapperemo
// utilizziamo la keyword children: is a reserved prop when you write a component and children is anything that's inside of the component that you rendered (see Edoardo Midali course)
export const MovieProvider = ({ children }) => {
  // creo lo state che voglio condividere
  // const [favorites, setFavorites] = useState([]);
  const [favorites, setFavorites] = useState(
    !!JSON.parse(localStorage.getItem('favorites'))
      ? JSON.parse(localStorage.getItem('favorites'))
      : []
  );
  // localStorage allow us to store values directly within our browser
  // la prima cosa che faccio tramite useEffect() è controllare se ci sono favorites movies in memoria
  // questo effect viene eseguito subito
  useEffect(() => {
    const storedFavs = localStorage.getItem('favorites');

    // se ci sono film favoriti li salvo nello state favorites, dopo averli parsati da json a oggetto js
    // nel localstorage posso salvare solo stringhe
    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs));
    }
  }, []);

  // con un altro effect vado a salvare i favorites nel localstorage, dopo aver convertito loggetto js in stringa json
  // questo effect si attiverà solo quando la dependency favorites cambierà di valore
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // devo controllare se un movie è un favorite, aggiungerlo ai favorites o rimuoverlo dai favorites
  // per aggiungere un movie ai favoriti utilizzo il setFavorites(), passandogli una funzione accetta come argomento il precedente valore dello state
  // parametro da passare movie
  const addToFavorites = (movie) => {
    // aggiungo il movie andando a richiamare il precedente valore di favorites che è un array di movie
    // tramite spread operator estraggo tutti gli elementi dell'array favorites, aggiungo il nuovo movie e wrappo tutto fra quadre per avere un nuovo array che viene assegnato come nuovo valore a favorites

    setFavorites((previous) => [...previous, movie]);
  };

  // rimuovo un movie dai favorites
  // lo faccio filtrando il precedente valore di favorites tramite metodo .filter() con condizione di darmi un array che contiene tutti i movie che hanno id diverso da quello dle movie che passo alla funzione
  const removeFromFavorites = (movieId) => {
    setFavorites((previous) =>
      previous.filter((movie) => movie.id !== movieId)
    );
  };

  // per controllare se un movie è già tra i favoriti utilizzo il metodo .some()
  // mi ritorna un booleano in caso la condizione è rispettata
  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  // per passare tutte queste funzioni al children creo un oggetto value che le contiene
  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  // ritorniamo un tag MovieContext.Provider con al suo interno children
  // in questo modo diciamo che qualsiasi cosa sarà wrappata sarà nella children prop del provider
  // passo value come props e sarò disponibile in ogni componente wrappato dal provider
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

import './App.css';
import MovieCard from './components/MovieCard';

function App() {
  // creo una const
  const movieNumber = 1;

  return (
    <>
      {/* in base al valore di movieNumber faccio vedere solo un movie */}
      {/* lo faccio tramite ternary operartor, tutto fra parentesi graffe */}
      {movieNumber === 1 ? (
        <MovieCard movie={{ title: "Tim's film" }}></MovieCard>
      ) : (
        <MovieCard movie={{ title: "Joe's film" }}></MovieCard>
      )}
      {/* se volessi far vedere qualcosa senza una alternativa utilizzo l'operatore js &&, short-circuit evaluation */}
      {movieNumber === 1 && (
        <span>Sono un valore vero e movieNumber è uguale ad 1</span>
      )}
    </>
  );
}

export default App;

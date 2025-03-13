// creo una nuova cartella components in src
// all'interno creo un nuovo file .jsx per creare un componente per visualizzare un movie
// un componente è una funzione che ritorna codice jsx e devo esportarla per renderla utilizzabile negli altri componenti
// il componente riceverà una prop che sarà un oggetto con le informazioni per ogni movie
function MovieCard({ movie }) {
  // function che servirà per settare come favorite un film
  function onFavoriteClick() {
    alert('clicked');
  }

  return (
    // per assegnare una classe css ad un elemento va utilizzata la keyword className e non class perchè class è una keyword riservata per una Classe JS
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split('-')[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;

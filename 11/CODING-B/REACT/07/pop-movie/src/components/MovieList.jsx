function MovieItem({ movie, onSelectMovieId }) {
    return (
      <li key={movie.imdbID} onClick={() => onSelectMovieId(movie.imdbID)}>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h3>{movie.Title}</h3>
        <div>
          <p>
            <span>📅</span>
            <span>{movie.Year}</span>
          </p>
        </div>
      </li>
    );
}

function MovieList({ movies, onSelectMovieId }) {
    return (
      <ul className="list list-movies">
        {movies?.map((movie, index) => (
          <MovieItem
            key={index}
            movie={movie}
            onSelectMovieId={onSelectMovieId}
          />
        ))}
      </ul>
    );
}

export default MovieList;
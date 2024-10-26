import { useState, useEffect } from "react";
import { VITE_OMDB_API_KEY } from "./config";

function Logo() {
  return (
    <div className="logo">
      <span role="img">🎫</span>
      <h1>Movie</h1>
    </div>
  );
}

function Search({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies?.length}</strong> results
    </p>
  );
}

function NavBar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function BoxMovies({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

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

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("oppenheimer");
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  function handleSelectMovieId(id) {
    setSelectedMovieId((selectedId) => (selectedId === id ? null : id));
  }

  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?s=${query}&apikey=${VITE_OMDB_API_KEY}`
        );
        const data = await res.json();
        setMovies(data.Search);
      } catch (err) {
        console.log(err);
        return;
      } 
    }

    if (query.length < 3) {
      setMovies([]);
      return;
    }

    fetchMovie();
  }, [query]);

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <BoxMovies>
          <MovieList movies={movies} onSelectMovieId={handleSelectMovieId} />
        </BoxMovies>
        <BoxMovies></BoxMovies>
      </Main>
    </>
  )
}

export default App

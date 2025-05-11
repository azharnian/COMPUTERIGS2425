import { useState, useEffect } from "react";
import { OMDB_API_KEY } from "./config";

import NavBar from "./components/Navbar";
import Logo from "./components/Logo";
import SearchInput from "./components/Search";
import Main from "./components/Main";
import BoxMovies from "./components/BoxMovies";
import Loader from "./components/LoadingAnimation";
import MovieList from "./components/MovieList";

function App() {
  const [query, setQuery] = useState("oppenheimer");
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?s=${query}&apikey=${OMDB_API_KEY}`
          );

          const data = await res.json();
          console.log(data.Search);
          setMovies(data.Search);
          setIsLoading(false);
        } catch (err) {
          console.log(err);
        } 
    }

    if (query.length < 3) {
      setMovies([]);
      return;
    }

    fetchMovie();
  }, [query]);

  function handleSelectMovieId(id) {
    setSelectedMovieId((selectedId) => (selectedId === id ? null : id));
  }

  return (
    <>
      <NavBar>
        <Logo />
        <SearchInput query={query} setQuery={setQuery} />
      </NavBar>
      <Main>
        <BoxMovies>
        {isLoading ? 
              <Loader /> : 
              <MovieList movies={movies} onSelectMovieId={handleSelectMovieId} />}
        </BoxMovies>
        <BoxMovies>
          
        </BoxMovies>
      </Main>
    </>
  )
}

export default App

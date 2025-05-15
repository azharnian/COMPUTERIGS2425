import { useState, useEffect } from "react";
import { OMDB_API_KEY } from "../config";
import Loader from "./LoadingAnimation";

function MovieDetails({ selectedId, onCloseMovie })
{
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    async function getMovieDetails() {
        setIsLoading(true);
        const response = await fetch(
            `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${selectedId}`
        );
        const data = await response.json();
        console.log(data);
        setMovie(data);
        setIsLoading(false);
    }

    const {
        Title: title,
        Year: year,
        Released: released,
        Poster: poster,
        imdbRating: imdbRating,
        Runtime: runtime,
        Plot: plot,
        Genre: genre,
        Actors: actors,
        Director: director,
    } = movie;

    useEffect(() => {
        getMovieDetails();
    }, [selectedId]);

    return (
        <div className="details">
        {isLoading ? (
            <Loader />
        ) : (
            <>
            <header>
                <button className="btn-back" onClick={onCloseMovie}>
                    &#x2715;
                </button>
                <img src={poster} alt={`${title} poster`} />
                <div className="details-overview">
                    <h2>{title}</h2>
                    <p>
                        <span>📅</span>
                        <span>{released}</span>
                    </p>
                    <p>
                        <span>⏳</span>
                        <span>{runtime}</span>
                    </p>
                    <p>
                        <span>🌟</span>
                        <span>{imdbRating}</span>
                    </p>
                </div>
            </header>
            <section>
                <p>
                    <em>{plot}</em>
                </p>
                <p>Year: {year}</p>
                <p>Genre: {genre}</p>
                <p>Starring: {actors}</p>
                <p>Directed by: {director}</p>

                <div className="rating">
                
                </div>
            </section>
            </>
        )}
        </div>
    )
}

export default MovieDetails;
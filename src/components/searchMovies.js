import React, { useState } from 'react';
import MovieCard from './movieCard';
import styles from "../styles/searchMovies.module.css"

export default function SearchMovies() {
    const [query, setQuery] = useState(null);
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        } catch (err) {
            setError('Failed to fetch movies');
            setMovies([]);
        } finally {
            setLoading(false);
        }
        
    };
    return (
        <>
        <div className={styles.head}>
            <h1 className={styles.h1}>REACT MOVIE SEARCH</h1>
            <form onSubmit={handleSubmit} className="form">
                
                <input className={styles.input}
                    type="text"
                    name="query"
                    value={query}
                    
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="i.e. Jurassic Park"
                  
                />
                <button className={styles.button} type="submit">
                    Search!
                </button>
        
            </form>
            </div>
            {loading && <h3 className={styles.load} >Loading...</h3>}
        <div className={styles.bodyy}>
       
            {error && <p className="flash error">{error}</p>}
            {!loading && !error && (
                <div className="card-list">
                    {movies &&
                        movies
                            .filter((movie) => movie.poster_path)
                            .map((movie) => (
                                <MovieCard movie={movie} key={movie.id} />
                            ))}
                </div>
            )}
        </div>
           
      </>
    );
}

import React from 'react';
import styles from "../styles/movieCard.module.css"

export default function movieCard({ movie, history }) {
    const title =
        movie.title.substring(0, 30) + (movie.title.length > 30 ? '...' : '');
    const description =
        movie.overview.substring(0, 100) +
        (movie.overview.length > 100 ? '...' : '');

    const showMovieDetails = () => {
        console.log('show moviee details');
    };
    return (
        <div className={styles.card} onClick={showMovieDetails}>
            <img
                className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster image'}
            />
            <div className="card--content" >
                <div className={styles.info}>
                <h3 className="card--title">{title}</h3>
                <small style={{color: "green"}}>RELEASE DATE: {movie.release_date}</small>
                <small>RATING: {movie.vote_average}</small>
                <p className="card--desc">{description}</p>
                </div>
                
            </div>
        </div>
    );
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface MovieDetailsProps {
    movieId: number;
    onAddToWatchlist: (movieId: number) => void;
}

interface MovieDetail {
    id: number;
    title: string;
    overview: string;
    // ... other detailed properties
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movieId, onAddToWatchlist }) => {
    const [movieDetails, setMovieDetails] = useState<MovieDetail | null>(null);

    useEffect(() => {
        // Fetch detailed movie data from your backend
        axios.get(`/movies/${movieId}`)
            .then(response => {
                setMovieDetails(response.data);
            });
    }, [movieId]);

    return (
        <div>
            {movieDetails && (
                <div>
                    <h1>{movieDetails.title}</h1>
                    <p>{movieDetails.overview}</p>
                    <button onClick={() => onAddToWatchlist(movieId)}>Add to Watchlist</button>
                </div>
            )}
        </div>
    );
}

export default MovieDetails;

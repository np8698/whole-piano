import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Movie {
    id: number;
    title: string;
    // ... other movie properties
}

const MovieList: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        // Fetch movies from your backend
        axios.get(`/movies?page=${page}`)
            .then(response => {
                setMovies(prevMovies => [...prevMovies, ...response.data]);
            });
    }, [page]);

    // Implement infinite scroll logic here using a library or intersection observer

    return (
        <div>
            {movies.map(movie => (
                <div key={movie.id}>
                    {movie.title}
                    {/* Render more movie details as needed */}
                </div>
            ))}
        </div>
    );
}

export default MovieList;

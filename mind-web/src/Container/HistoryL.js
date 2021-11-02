import React from 'react';
const prevMovies = () => {

    localStorage.getItem("prevMovies");
    localStorage.setItem("movies", prevMovies)
}
export default prevMovies;
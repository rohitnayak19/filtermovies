import React from 'react'
import Movies from './Movies';

const App = () => {
  const movies = [
    { id: 1, title: "Inception", genre: "Action" },
    { id: 2, title: "The Dark Knight", genre: "Action" },
    { id: 3, title: "Forrest Gump", genre: "Drama" },
    { id: 4, title: "The Godfather", genre: "Drama" },
    { id: 5, title: "Superbad", genre: "Comedy" },
    { id: 6, title: "The Hangover", genre: "Comedy" },
    { id: 7, title: "Pulp Fiction", genre: "Action" },
    { id: 8, title: "La La Land", genre: "Drama" },
    { id: 9, title: "Toy Story", genre: "Comedy" },
    { id: 10, title: "The Avengers", genre: "Action" }
  ];

  return (

    <Movies movies={movies} />
  )
}

export default App
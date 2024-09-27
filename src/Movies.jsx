import React, { useState, useMemo } from 'react'

const Movies = ({ movies }) => {
  const [selectedGenre, setselectedGenre] = useState("All");
  const [sortedMovie, setSortedMovies] = useState([...movies]);

  const movieCount = useMemo(() => {
    return selectedGenre === "All" ? movies.length : movies.filter((m) => m.genre === selectedGenre).length;
  }, sortedMovie, selectedGenre);


  const handleSortByTitle = () => {
    const sortedByTitle = [...sortedMovie].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setSortedMovies(sortedByTitle);
  };

  const handleSortByGenre = () => {
    const sortedByGenre = [...sortedMovie].sort((a, b) => (
      a.genre.localeCompare(b.genre)
    ));

    setSortedMovies(sortedByGenre)
  }



  return (
    <>
      <h1>Movies list</h1>
      <select onChange={(e) => setselectedGenre(e.target.value)} value={selectedGenre}>
        <option value="All">All</option>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
      </select>

      <button onClick={handleSortByTitle}>Sort by title</button>
      <button onClick={handleSortByGenre}>Sort by Genre</button>
      <ul>
        {sortedMovie.filter((m) => m.genre === selectedGenre || selectedGenre === "All").
          map((m) => (
            <li key={m.id}>{m.title} - {m.genre}</li>
          ))
        }
      </ul>
      <h2>Movies found : {movieCount}</h2>
    </>
  )
}

export default Movies
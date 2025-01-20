import React, { useState } from 'react';
import './App.css';

const Movies = [
  {title: 'The Terminator', genres: ['Action', 'Sci-Fi'], releaseDate: '1984'},
  {title: 'The Martian', genres: ['Sci-Fi'], releaseDate: '2015'},
  {title: 'The Matrix', genres: ['Action', 'Sci-Fi'], releaseDate: '1999'},
  {title: 'Tropic Thunder', genres: ['Action', 'Comedy'], releaseDate: '2008'},
  {title: 'The Hangover', genres: ['Comedy'], releaseDate: '2009'}
];

function MovieList () {
  // Stores the selected genre from the dropdown menu
  const[genreValue, setGenreValue] = useState('All Genres')

  // Updates the selected genre in the genre dropdown menu
  const handleGenreSelect = (event) => {
    setGenreValue(event.target.value);
  }
  
  return (
    <div class='container'>
      <h1 class='header'>Movie List</h1>
      <div class='dropdown'> {// Value is used to determine which movie cards should be rendered and is stored in the genreValue state}
        <select value={genreValue} onChange={handleGenreSelect}>
          <option value="All Genres">All Genres</option>
          <option value="Action">Action</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Comedy">Comedy</option>
        </select>
      </div>
      <div>
        {// Use map to iterate over our array of movies}
        <ul key={Movies.title}>{Movies.map((item) => (
          <ul>
            {// Check if 'All Genres' has been selected in the dropdown menu or if a specific genre has been selected and only render the movie cards with the selected genre}
            {genreValue === 'All Genres' || item.genres.includes(genreValue) ? (
              <div class='movieCard' onClick={() => alert(`You clicked on "${item.title}"!`)}>
                <p class='title'>{item.title}</p>
                <p>Genres:</p>
                {// Use map again to list each genre for the movie on its card}
                {(item.genres).map((value) => <li class='genres'>{value}</li>)}
                <p class='releaseDate'>Release date: {item.releaseDate}</p>
              </div>) : null
              }
          </ul>
          )
        )}</ul>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <MovieList/>
    </div>
  );
}

export default App;

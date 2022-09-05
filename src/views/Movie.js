import React from 'react'

import Navbar from '../components/Navbar'
import MovieDetails from "../components/MovieDetails";
import Carrousel from "../components/Carrousel";

const Movie = () => {
  return (
    <div id="movie">
      <div id="navbar">
        <Navbar />
      </div>
      <div id="content">
        <MovieDetails/>
        <Carrousel/>
      </div>
    </div>
  )
}

export default Movie
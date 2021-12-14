import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Trailer from "../pages/Trailer";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0dfeb1e3115d788bdd6ccd6d217d93cf&page=2";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=0dfeb1e3115d788bdd6ccd6d217d93cf&query=";
const IMG_API = "https://image.tmdb.org/t/p/original";
const Movie = ({ handleId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);
  const getMovies = (api) => {
    axios.get(api).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
    });
  };

  return (
    <div className="movie-container">
      {movies.map((data) => {
        return (
          <div className="movie">
            <img src={IMG_API + data.poster_path}></img>
            <div className="movie-info">
              <h4>{data.title}</h4>
              <span>{data.vote_average}</span>
              <span>{data.id}</span>
            </div>
            <div className="overview">
              <h3>Overview</h3>
              <h5>Release Date : {data.release_date}</h5>
              <NavLink to="/trailer" onClick={() => handleId(data)}>
                Watch Trailer
              </NavLink>
              <p>{data.overview}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;

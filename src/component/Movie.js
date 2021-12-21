import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=0dfeb1e3115d788bdd6ccd6d217d93cf&query=1";
const IMG_API = "https://image.tmdb.org/t/p/original";
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0dfeb1e3115d788bdd6ccd6d217d93cf&page=`;
const Movie = ({ handleId }) => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [nextPage, setNextPage] = useState(1);
  useEffect(() => {
    getMovies(FEATURED_API + nextPage);
  }, [nextPage]);
  const getMovies = (api) => {
    axios.get(api).then((res) => {
      setMovies(res.data.results);
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(SEARCH_API + search);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  console.log(nextPage);

  return (
    <>
      {" "}
      <nav>
        <div className="search-form">
          <h2>
            Movie <span>DataBase</span>
          </h2>

          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleChange}
              value={search}
              placeholder="Search Film"
            />
          </form>
        </div>
        <div className="button-group">
          <button
            onClick={() =>
              setNextPage(nextPage === 1 ? nextPage : nextPage - 1)
            }
          >
            Prev
          </button>
          <button onClick={() => setNextPage(nextPage + 1)}>Next</button>
        </div>
      </nav>
      <div className="movie-container">
        {movies.map((data, i) => {
          return (
            <div key={i} className="movie">
              <img src={IMG_API + data.poster_path}></img>
              <div className="movie-info">
                <h4>{data.title}</h4>
                <span>{data.vote_average}</span>
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
    </>
  );
};

export default Movie;

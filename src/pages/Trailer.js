import React from "react";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
const IMG_API = "https://image.tmdb.org/t/p/original";
const Trailer = ({ id }) => {
  const youtubeUrl = "https://www.youtube.com/embed/";
  const [trailer, setTrailer] = useState("");
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id.id}/videos?api_key=0dfeb1e3115d788bdd6ccd6d217d93cf&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        const [trailer] = data.results;
        console.log(data.results);
        const key = trailer.key;
        setTrailer(key);
      });
  }, []);
  console.log(id);
  return (
    <div className="trailer">
      <div className="trailer-overview">
        <div className="trailer-head">
          <h3 className="trailer-title">{id.original_title}</h3>
          <img className="backdrop" src={IMG_API + id.backdrop_path} alt="" />
        </div>
        <div className="trailer-parag-div">
          <div className="vote">
            <div className="icon">
              <Icon
                className="imdb-icon"
                icon="cib:imdb"
                color="#f5c518"
                width="40"
              />
            </div>
            <p>{id.vote_average}</p>
          </div>
          <p className="trailer-parag">{id.overview}</p>
        </div>
      </div>
      <iframe
        style={trailer ? { display: "block" } : { display: "none" }}
        src={youtubeUrl + trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Trailer;

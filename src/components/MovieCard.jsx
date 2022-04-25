import React, { Component } from "react";
const MovieCard = () => {
  return (
    <div className="movie-card">
      <div>
        <img
          className="col-6 col-md-4 col-lg-2 px-1"
          src="https://m.media-amazon.com/images/M/MV5BOTVhMzYxNjgtYzYwOC00MGIwLWJmZGEtMjgwMzgxMWUwNmRhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg"
          alt=""
          width={200}
        />
      </div>
    </div>
  );
};

export default MovieCard;

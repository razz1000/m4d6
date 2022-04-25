import React, { Component } from "react";
import Thumbnail from "./Thumbnail";

const MovieRow = ({ sectionsMovies }) => {
  return (
    <div className="section horizontal-scroll">
      {sectionsMovies &&
        sectionsMovies.length > 0 &&
        sectionsMovies.map((movie) => <Thumbnail singleMovie={movie} />)}
    </div>
  );
};

export default MovieRow;

import React, { Component } from "react";
import Thumbnail from "./Thumbnail";
const MovieRow = ({ sectionsMovies }) => {
  console.log(sectionsMovies);
  return (
    <div className="section">
      <Thumbnail sectionsMovies={sectionsMovies} />
      <Thumbnail sectionsMovies={sectionsMovies} />
      {console.log(sectionsMovies)}
    </div>
  );
};

export default MovieRow;

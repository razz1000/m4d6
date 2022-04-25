import React, { Component } from "react";

const Thumbnail = ({ singleMovie }) => {
  return (
    <div className="card">
      <div>
        <img className="movie-card-image" src={singleMovie.Poster} alt="" />
      </div>

      <div className="lower-part-thumbnail">
        <div className="card-details">
          <h6>Movie Title</h6>
          <i className="fa-solid fa-circle-play" style={{ color: "wheat" }}></i>
          <i className="fa-solid fa-circle-plus" style={{ color: "wheat" }}></i>
          <i className="fa-solid fa-thumbs-up" style={{ color: "wheat" }}></i>
          <h5>Match: 90%</h5>
          <h5>Horror</h5>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;

import React, { Component } from "react";
import SectionName from "./SectionName";
import MovieCard from "./MovieCard";
import { Col, Container, Row } from "react-bootstrap";

const MoviesSection = () => {
  return (
    <div>
      <SectionName sectionName={"Popular on Netflix"} />
      <div>
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>

      <SectionName sectionName={"Tranding Now"} />
      <SectionName sectionName={"Violent Suspense TV Programmes"} />
    </div>
  );
};

export default MoviesSection;

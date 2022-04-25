import React, { Component } from "react";
import SectionName from "./SectionName";
import MovieRow from "./MovieRow";

class MoviesSection extends Component {
  state = {
    sectionsMovies: [],
  };

  componentDidMount = async () => {
    console.log("Comp did mount.");
    try {
      let url = "http://www.omdbapi.com/?apikey=f2be261d&s=king&type=movie";

      let response = await fetch(url);
      response = await response.json();
      this.setState({
        ...this.state,
        sectionsMovies: response.Search,
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="">
        <SectionName sectionName={"Popular on Netflix"} />
        <div>
          {this.state.sectionsMovies &&
            this.state.sectionsMovies.length > 0 && (
              <MovieRow sectionsMovies={this.state.sectionsMovies} />
            )}
        </div>

        <MovieRow />
        <SectionName sectionName={"Violent Suspense TV Programmes"} />
        <div>
          {this.state.sectionsMovies &&
            this.state.sectionsMovies.length > 0 && (
              <MovieRow sectionsMovies={this.state.sectionsMovies} />
            )}
        </div>
        <SectionName sectionName={"Violent Suspense TV Programmes"} />
        <div>
          {this.state.sectionsMovies &&
            this.state.sectionsMovies.length > 0 && (
              <MovieRow sectionsMovies={this.state.sectionsMovies} />
            )}
        </div>
        <MovieRow />
      </div>
    );
  }
}

export default MoviesSection;

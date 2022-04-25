import "./App.css";
import NavBar from "./component/NavBar";
import SearchComponent from "./component/SearchComponent";
import MoviesSection from "./components/MoviesSection";
import Footer from "./component/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  state = {
    searchQuery: "",
  };
  return (
    <div>
      <NavBar />
      <SearchComponent
        searchQuery={searchQuery}
        setSearchQuery={this.setState}
      />
      <MoviesSection searchQuery={searchQuery} />
      <Footer></Footer>
    </div>
  );
}

export default App;

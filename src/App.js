
import "./App.css";
import NavBar from "./component/NavBar";
import SearchComponent from "./component/SearchComponent";
import MoviesSection from "./Components/MoviesSection";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavBar />
      <SearchComponent />
    <MoviesSection />

    </div>
  )
}

export default App;

import "./app.css";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";

const App = () => {
  const data = [
    {name: "empire of osman", viewers: 988, favourite: false, id: 1},
    {name: "Ertogrul", viewers: 948, favourite: false, id: 2},
    {name: "Omar", viewers: 788, favourite: true , id: 3}
  ]
  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <MovieList data= {data}/>
        <MoviesAddForm/>
      </div>
    </div>
    );
};
export default App;

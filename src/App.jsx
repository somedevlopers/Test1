import { useCallback, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies, useSearch } from "./hooks";
import debounce from "just-debounce-it";



function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search, sort });


  const debounceGetMovies = useCallback(
    debounce(search => {
    getMovies({ search })
    }, 400), []
)

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({search})
  };

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debounceGetMovies(newSearch)
  }
  
  return (
    <div className="page">
      <header>
        <h1>Search a Movie</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            name="query"
            placeholder="Star Wars, Lord of the Rings, etc..."
          />
          <input type="checkbox" onChange={handleSort}
           checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{color:"red", justifyContent:"center"}}>{ error }</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;

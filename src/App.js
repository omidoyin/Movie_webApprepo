import {useEffect, useState} from "react";
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';


//2c014251 
const API_URL = 'http://www.omdbapi.com?apikey=2c014251';

const movie1 = {
  "Title": "Fighting, Flying and Driving: The Stunts of Spiderman 3",
  "Year": "2007",
  "imdbID": "tt1132238",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg"
}


const App = () =>{

  const [movies,setMovies] = useState([]);
  
  const [searchTerm, setSearch] = useState('');

  const searchMovies = async(title)=>{
const response = await fetch(`${API_URL}&s=${title}`);
const data = await response.json();
setMovies(data.Search);
  }

    useEffect(() =>{ searchMovies('spiderman');},  []);

    
    return (
        <div className = "app">
            <h1>MovieLand</h1>
            <div className="search">
              <input
              placeholder="search for movies"
              value={searchTerm}
              onChange={(e) => setSearch(e.target.value)}
              />
              <img
              src={SearchIcon}
              alt="search"
              onClick={()=> searchMovies(searchTerm)}
              />
            </div>

            { 
              movies?.length > 0 
                ? (
                  <div className="container">
                    {movies.map((movie) => (
                      <MovieCard movie={movie} />
                    ))}
                  </div>
                ): (
                <div className ="empty">
                  <h2> No movies found</h2>
                </div>
               )

            } 

            {/* <div className="container">
              <MovieCard movie1={movies[0]} />
            </div> */}

           

        </div>
   
    );

}
export default App;            
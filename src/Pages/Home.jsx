import { useEffect, useState } from 'react';
import MovieCard from '../Components/MovieCard';
import ShimmerUI from '../Components/ShimmerUI'

const Home = () => {
  const [listofmovie, setlistofMovie] = useState([]);
  const [filtermovies, setfiltermovie] = useState([]);
  const [searchmovie, setsearchMovie] = useState("");


  useEffect(() => {
    MovieAPI();
  }, []);

  const MovieAPI = async (searchTerm = "Movie") => {
    const URL = `http://www.omdbapi.com/?apikey=95a9959a&s=${searchTerm}`;
    const fetchURl = await fetch(URL);
    const responseAPI = await fetchURl.json();
    const finalData = responseAPI?.Search
    setlistofMovie(finalData);
    setfiltermovie(finalData);
  };

  return listofmovie.length === 0 ? <ShimmerUI /> : (
    <>
    <main >
    <div className="text-center mt-5">
        <h3 className="text-white">All Movies</h3>
      </div>
      
      <div className="d-flex justify-content-end me-5 mt-3">
        <input 
          placeholder="Search here" 
          value={searchmovie}
          onChange={(e) => setsearchMovie(e.target.value)}
          className="rounded form-control w-25 border-0" 
          type="text"
        /> 
        <button 
          onClick={() => {
            MovieAPI(searchmovie);  // Fetch movies based on search term
          }} 
          className="btn ms-2"
        >
          <i className="fa-solid text-white fa-magnifying-glass"></i>
        </button>
      </div>
      
      <div className="container d-flex gap-5 justify-content-center flex-wrap p-5 rounded bg-movies mt-4">
        {filtermovies.map(item => (
          <MovieCard key={item?.imdbID} moviedata={item} />
        ))}
      </div> 
    </main>
    
    </>
  );
};

export default Home;

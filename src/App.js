import { useState } from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import MoviesContainer  from './components/Movies/MoviesContainer';


const App = () => {

  // const [movies, setMovies] = useState([]);

  // const[isLoading, setIsLoading] = useState(false);
  
  // const [currentPage, setCurrentPage] = useState(1);

  // const [moviesOnPage] = useState(8);

  // const moviesHandler = () => {
  //   moviesAPI.getMovies().then(data => {
  //     setIsLoading(true)
  //     setMovies(data.movies);
  //     this.setState({ limitSize, movies});
  // })

  // const onPaginationHandler = (pageNumber) => {
  //   setCurrentPage(pageNumber)
  // }

  // useEffect(() => {
  //   fetchMoviesHandler();
  // }, []);

  return (
    <div className="wrapper">
      <HeaderContainer/>
      <MoviesContainer/>
    </div>
  );
}

export default App;

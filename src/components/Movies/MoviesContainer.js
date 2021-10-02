import React from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../redux/moviesReducer';
import MovieCard from '../MovieCard/MovieCard';
import s from './Movies.module.css';

class MoviesContainer extends React.Component{
    componentDidMount() {
        this.props.getMovies(this.props.totalMoviesCount, this.props.currentPage);   
    }
    render() {
        return (
            <div className={s.MoviesContainer}>
                <div className={s.Movies}>
                    {this.props.moviesList.map(movie => {
                        return (
                            <MovieCard
                                src={movie.medium_cover_image}
                                genres={movie.genres}
                                rating={movie.rating}
                                // onSaveMovieData={saveMovieData}
                                movieData={{
                                    source: movie.large_cover_image,
                                    name: movie.title,
                                    releaseYear: movie.year,
                                    genres: movie.genres,
                                    synopsis: movie.synopsis,
                                    id: movie.id,
                                }}
                                key={movie.id}
                            />
                            )}
                    )}
                </div>
                
            </div>
    )}
};

let mapStateToProps = (state) => {
    return {
        moviesList: state.moviesPage.movies,
        limitSize: state.moviesPage.limitSize,
        currentPage: state.moviesPage.currentPage,
        totalMoviesCount: state.moviesPage.totalMoviesCount,
    }
}

export default connect(mapStateToProps, {getMovies})(MoviesContainer);
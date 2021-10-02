import React from 'react';
import { connect } from 'react-redux';
import { getMovies, setCurrentPage } from './../../redux/moviesReducer';
import Header from './Header';
import axios from 'axios';
import { moviesAPI } from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getMovies(this.props.totalMoviesCount, this.props.currentPage);
    }

    onPageChanged = (pageNumber) => {
        this.props.getMovies(this.props.totalMoviesCount, pageNumber);
    }

    render() {
        return (
            <div>
                <Header movies={this.props.movies}
                        limitSize={this.props.limitSize}
                        currentPage={this.props.currentPage}
                        totalMoviesCount={this.props.totalMoviesCount}
                        onPageChanged={this.onPageChanged} 
                        allMovies={this.props.allMovies}
                        />
            </div>
        );
    }
};

let mapStateToProps = (state) => {
    return {
        movies: state.moviesPage.movies,
        limitSize: state.moviesPage.limitSize,
        currentPage: state.moviesPage.currentPage,
        totalMoviesCount: state.moviesPage.totalMoviesCount,
    }
}



export default connect(mapStateToProps, {getMovies, setCurrentPage})(HeaderContainer);
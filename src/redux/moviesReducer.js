import { moviesAPI } from "../api/api";

const SET_MOVIES = 'SET_MOVIES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_MOVIES_COUNT = 'SET_TOTAL_MOVIES_COUNT';

let initialState = {
    movies: [ ],
    currentPage: 1,
    totalMoviesCount: 40,
    limitSize: 8,
    isFetching: true,
};

const moviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MOVIES: {
            return { ...state, movies: action.movies }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_MOVIES_COUNT: {
            return { ...state, totalMoviesCount: action.totalMoviesCount}
        }
        default:
            return state;
    }
}

export const setMovies = (movies) => ({type: SET_MOVIES, movies })
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setTotalMoviesCount = (totalMoviesCount) => ({type: SET_TOTAL_MOVIES_COUNT, totalMoviesCount })

export const getMovies = (limitSize, currentPage) => {
    return (dispatch) => {
        return moviesAPI.getMovies(limitSize = 8, currentPage).then(data => {
            dispatch(setMovies(data.movies));
            // dispatch(setTotalMoviesCount(data.limit));
            dispatch(setCurrentPage(data.page_number));
        });
    }
}



export default moviesReducer;
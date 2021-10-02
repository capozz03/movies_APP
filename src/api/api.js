import axios from 'axios';

const instance = axios.create({
    baseURL: `https://yts.mx/api/v2/list_movies.json`,
});

export const moviesAPI = {
    getMovies(limitSize, currentPage) {
        return instance.get(`?limit=${limitSize}&page=${currentPage}`)
            .then(response => response.data.data)
    }
} 
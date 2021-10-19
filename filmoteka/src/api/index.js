import axios from 'axios';

const axiosInstance = axios.create({
  BASE_URL:'https://api.themoviedb.org/3/movie',
  BASE_URL_TRENDING:'https://api.themoviedb.org/3/trending/movie/week?',
BASE_URL_SEARCH:'https://api.themoviedb.org/3/search/movie?'
});

export default axiosInstance;
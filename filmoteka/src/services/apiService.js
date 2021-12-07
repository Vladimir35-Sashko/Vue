import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "699fe261bad37d16f5bc7fa8547e0738";

axios.defaults.baseURL = BASE_URL;

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return await response.data;
};

export const fetchPopularMovies = async () => {
  const response = await axios.get(`/movie/popular?api_key=${API_KEY}`);
  return await response.data;
};

export const fetchThisWeekPopularMovies = async () => {
  const response = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
  return await response.data;
};

export const fetchMoviesSearchQuery = async (searchQuery, page) => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&page=${page}&language=en&query='${searchQuery}`
  );
  const moviesData = await response.data;
  if (moviesData.results.length === 0) {
    throw new Error(`Not found ${searchQuery}`);
  }
  return moviesData;
};

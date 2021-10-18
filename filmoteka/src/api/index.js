const API_KEY = 'bb47124fe990b3a04ccb5a994cf49456';
const BASE_URL = 'https://api.themoviedb.org/3/movie'; //Popular , by ID
const BASE_URL_TRENDING = 'https://api.themoviedb.org/3/trending/movie/week?'; //trending
const BASE_URL_SEARCH = 'https://api.themoviedb.org/3/search/movie?';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.movieId = '';
    this.pageNumber = 1;
  }
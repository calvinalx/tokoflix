import axios from 'axios'

class TmdbApi {
  constructor(API_KEY) {
    this.API_KEY = API_KEY
  }

  fetchNowPlaying(region) {
    return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.API_KEY}&language=en-US&page=1&region=${region}`)
      .then(res => res.data)
  }

  fetchMovieDetails(movie_id) {
    return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${this.API_KEY}&language=en-US`)
      .then(res => res.data)
  }

  fetchMovieCasts(movie_id) {
    return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${this.API_KEY}`)
  }

  fetchSimilarMovies(movie_id) {
    return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${this.API_KEY}&language=en-US&page=1`)
  }

  fetchRecommendations(movie_id) {
    return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${this.API_KEY}&language=en-US&page=1`)
  }
}

export default TmdbApi
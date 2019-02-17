import axios from 'axios'

class TmdbApi {
  constructor(API_KEY) {
    this.API_KEY = API_KEY
  }

  fetchNowPlaying(region) {
    return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.API_KEY}&language=en-US&page=1&region=${region}`)
      .then(res => res.data)
  }
}

export default TmdbApi
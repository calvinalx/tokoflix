import React, { Component } from 'react'
import TmdbApi from '../libs/TmdbApi'
import priceCheck from '../libs/priceCheck'
import Header from './Header'
import Poster from './Poster'

class Movie extends Component {
  constructor(props) {
    super();

    this.state = {
      id: null,
      movie: null,
      casts: null,
      similar: null,
      recommendations: null,
      balance: null
    }

    this.TmdbApi = new TmdbApi('22e2f8fdb2d0ca58aa47ab6c7b2a6cb9')
  }

  componentDidMount() {
    const id = this.props.location.state.id
    this.setState ({ id })
    this.TmdbApi.fetchMovieDetails(id).then(data => this.setState({ 
      movie: data
    }))
    this.TmdbApi.fetchMovieCasts(id).then(data => this.setState({ 
      casts: data
    }))
    this.TmdbApi.fetchSimilarMovies(id).then(data => this.setState({ 
      similar: data
    }))
    this.TmdbApi.fetchSimilarMovies(id).then(data => this.setState({ 
      recommendations: data
    }))
  }

  buyTicket() {
    let balance = parseInt(window.localStorage.getItem('balance'))
    let price = priceCheck(this.state.movie.vote_average)
    if (balance < price) {
      alert('Saldo tidak mencukupi')
    } else {
      let newBalance = balance - price
      window.localStorage.setItem(this.state.id, 'true')
      window.localStorage.setItem('balance', newBalance)
      this.setState({
        balance
      })
      alert('Tiket telah dibeli') 
    }
  }

  render() {
    const { movie, casts, similar, recommendations } = this.state

    if (!movie || !casts || !similar || !recommendations) {
      return(
        <div>
          <Header />
          <p className="text-center">Loading...</p>
        </div>
      )
    }

    return (
      <div>
        <Header />
        <div className="container"><br /><br />
          <div className="row">
            <div className="col-lg-4">
              <Poster 
                id={movie.id}
                title={movie.title}
                poster={movie.poster_path}
                price={priceCheck(movie.vote_average)} />
            </div>
            <div className="col-lg-4">
              <h2>{movie.title}</h2>
              <strong>Rating:</strong> {movie.vote_average}<br />
              <strong>Durasi:</strong> {movie.runtime} menit<br />
              <strong>Casts:</strong> {casts.data.cast.map(cast => {
                return (
                  <span key={cast.id}>{cast.name}. </span>
                )
              })}<br /><br />
              <h3>Rp {priceCheck(movie.vote_average)}</h3>
              {(window.localStorage.getItem(this.state.id)) ?
                <button className="btn btn-secondary" disabled>
                  Sudah dibeli
                </button>
                :
                <button 
                  onClick={() => this.buyTicket()} 
                  className="btn btn-primary">
                  Beli Tiket
                </button>
              }
            </div>
            <div className="col-lg-4">
              <h5>Similar movie</h5>
              {similar.data.total_results < 1 ? 'Tidak ada film yang mirip' : ''}
              {similar.data.results.map(movie => {
                return (
                  <span key={movie.id}>{movie.title}. </span>
                )
              })}<br /><br />
              <h5>Rekomendasi film</h5>
              {recommendations.data.total_results < 1 ? 'Tidak ada rekomendasi' : ''}
              {recommendations.data.results.map(movie => {
                return (
                  <span key={movie.id}>{movie.title}. </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Movie
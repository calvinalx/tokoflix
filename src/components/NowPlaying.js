import React, { Component } from 'react'
import queryString from 'query-string'
import TmdbApi from '../libs/TmdbApi'
import priceCheck from '../libs/priceCheck'
import Poster from './Poster'
import Header from './Header'

class NowPlaying extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    }

    this.TmdbApi = new TmdbApi('22e2f8fdb2d0ca58aa47ab6c7b2a6cb9')
    this.goToNextPage = this.goToNextPage.bind(this)
  }

  componentDidMount() {
    this.TmdbApi.fetchNowPlaying('id').then(data => this.setState({ data }))
  }

  goToNextPage() {
    const numberOfMovies = this.state.data.results.length
    const moviesPerPage = 6
    const numberOfPages = numberOfMovies / moviesPerPage
    let currentPage = parseInt(queryString.parse(this.props.location.search).page)
    let nextPage = 0
    if (!currentPage) {
      currentPage = 1
      nextPage = 2 
    } else {
      nextPage = currentPage + 1
    }

    if ((currentPage) >= numberOfPages) {
      alert('Anda berada di halaman terakhir')
    } else {
      this.props.history.push(`/?page=${nextPage}`)
    }

    let offSet = (currentPage - 1) * moviesPerPage
    window.pgLowerBound = offSet
    window.pgUpperBound = offSet + 5
  }

  render() {
    const { data } = this.state
    const page = queryString.parse(this.props.location.search).page

    if (!data) {
      return(
        <div>
          <Header />
          <p className="text-center">Loading...</p>
        </div>
      )
    }

    return(
      <div>
        <Header />
        <div className="container"><br />
          <div className="row">
            {data.results.slice(window.pgLowerBound, window.pgUpperBound).map(movie => {
              return (
                <div className="col-sm" key={movie.id}>
                  <Poster 
                    id={movie.id}
                    title={movie.title}
                    poster={movie.poster_path}
                    price={priceCheck(movie.vote_average)} />
                </div>
              )
            })}
          </div>
        </div>
        <p className="text-center"><br />
          Menampilkan halaman {!page ? '1' : page}
          <button 
            style={{ marginLeft: 10 }}
            className="btn btn-sm btn-warning"
            onClick={this.goToNextPage}>></button>
        </p>
      </div>
    )
  }
}

export default NowPlaying
import React, { Component } from 'react'
import queryString from 'query-string'
import TmdbApi from '../libs/TmdbApi'
import Poster from './Poster'
import Header from './Header'

class NowPlaying extends Component {
  constructor(props) {
    super();

    this.state = {
      data: null
    }

    this.TmdbApi = new TmdbApi('22e2f8fdb2d0ca58aa47ab6c7b2a6cb9')
  }

  priceCheck(rating) {
    if (rating <=3) {
      return 3500
    } else if ((rating >3) && (rating <=6)) {
      return 8250
    } else if ((rating >6) && (rating <=8)) {
      return 16350
    } else {
      return 21250
    }
  }

  componentDidMount() {
    this.TmdbApi.fetchNowPlaying('id').then(data => this.setState({ data }))
  }

  render() {
    const { data } = this.state
    const page = queryString.parse(this.props.location.search)
    
    if (!data) {
      return(
        <p>Loading...</p>
      )
    }

    return(
      <div>
        <Header />
        <p className="text-center">Showing page {page.page}</p>
        <div className="container">
          <div className="row">
            {data.results.map(movie => {
              return (
                <div className="col-sm" key={movie.id}>
                  <Poster 
                    id={movie.id}
                    title={movie.title}
                    poster={movie.poster_path}
                    price={this.priceCheck(movie.vote_average)} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default NowPlaying
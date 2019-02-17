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
      data: null
    }

    this.TmdbApi = new TmdbApi('22e2f8fdb2d0ca58aa47ab6c7b2a6cb9')
  }

  componentDidMount() {
    const id = this.props.location.state.id
    this.setState ({ id })
    this.TmdbApi.fetchMovieDetails(id).then(data => this.setState({ data }))
  }

  render() {
    const { data } = this.state

    if (!data) {
      return(
        <p>Loading...</p>
      )
    }

    return (
      <div>
        <Header />
        {console.log(this.state.data)}
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Poster 
                id={data.id}
                title={data.title}
                poster={data.poster_path}
                price={priceCheck(data.vote_average)} />
            </div>
            <div className="col-lg-4">
              Rating: {data.vote_average}<br />
              Durasi: {data.runtime} menit<br />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Movie
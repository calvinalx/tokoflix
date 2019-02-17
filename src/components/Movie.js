import React, { Component } from 'react'
import TmdbApi from '../libs/TmdbApi'

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
        {console.log(this.state.data)}
        <p>Movie ID is {this.state.id}</p>
      </div>
    )
  }
}

export default Movie
import React, { Component } from 'react'

class Movie extends Component {
  render() {
    const id = this.props.location.state.id

    return (
      <div>
        <p>Movie ID is {id}</p>
      </div>
    )
  }
}

export default Movie
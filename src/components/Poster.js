import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import formatMoney from '../libs/formatMoney'

class Poster extends Component {
  render() {
    const { poster, title, id, price } = this.props
    const slug = title.replace(/\s+/g, '-')
    const url = 'https://image.tmdb.org/t/p/w300' + poster

    return (
      <Link to={{
        pathname: `${id}-${slug}`,
        state: {id}
      }}>
        <div className="text-center">
          <img src={url} alt={title} />
          <p>
            <strong>{title}</strong>
            <span className="badge badge-success ml-2">
              {window.localStorage.getItem(id) ? 'Purchased' : '' }
            </span><br />
            {formatMoney(price)}
          </p>
        </div>
      </Link>
    )
  }
}

export default Poster
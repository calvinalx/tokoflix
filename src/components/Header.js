import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import formatMoney from '../libs/formatMoney'

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link to="/">
              <span className="navbar-brand">
                <strong>Tokoflix</strong> Now Showing
              </span>
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <span className="nav-link btn btn-outline-success"
                  style={{ padding: '0 0.50rem' }}>
                  Saldo {formatMoney(window.localStorage.getItem('balance'))}
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header

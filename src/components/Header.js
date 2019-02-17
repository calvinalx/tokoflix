import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link to="/">
              <span className="navbar-brand">Tokoflix</span> @calvinalx
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <span className="nav-link">
                  Saldo anda Rp {window.localStorage.getItem('balance')}
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
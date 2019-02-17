import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand">Tokoflix</span>
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="nav-link">
                Saldo anda Rp {window.localStorage.getItem('balance')}
              </span>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header
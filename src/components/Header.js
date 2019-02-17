import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Tokoflix</a>
          <ul className="navbar-nav">
            <li className="nav-item">Saldo anda</li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header
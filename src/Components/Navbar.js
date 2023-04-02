import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">NewsX</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/Business">Business</a></li>
                  <li><a className="dropdown-item" href="/Entertainment">Entertainment</a></li>
                  <li><a className="dropdown-item" href="/Health">Health</a></li>
                  <li><a className="dropdown-item" href="/Science">Science</a></li>
                  <li><a className="dropdown-item" href="/Sports">Sports</a></li>
                  <li><a className="dropdown-item" href="/Technology">Technology</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {/* <Search/> */}
            </form>
          </div>
        </div>
      </nav>
      </>
    )
  }
}

export default Navbar
import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="wave"
            className="logo-img"
          />
          <h1 className="logo-para">Wave</h1>
        </div>
        <ul className="btn-container">
          <li>
            <Link to="/" className="each-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="each-item">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="each-item">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header

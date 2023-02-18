// Write your JS code here
import {Component} from 'react'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
          alt="home"
          className="home-image"
        />
        <h1 className="home-heading">HOME</h1>
      </div>
    )
  }
}

export default Home

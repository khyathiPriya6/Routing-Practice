import {Component} from 'react'

import './index.css'

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
          alt="about"
          className="about-image"
        />
        <h1 className="about-heading">About</h1>
        <p className="about-para">
          I love to create! I am frontend web developer
        </p>
      </div>
    )
  }
}

export default About

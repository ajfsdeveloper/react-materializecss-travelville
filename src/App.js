import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Slider from './components/Slider'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Slider />
      </React.Fragment>
    )
  }
}

export default App

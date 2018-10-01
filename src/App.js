import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Search from './components/Search'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Slider />
        <Search />
      </React.Fragment>
    )
  }
}

export default App

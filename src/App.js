import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Search from './components/Search'
import IconBoxes from './components/IconBoxes'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Slider />
        <Search />
        <IconBoxes />
      </React.Fragment>
    )
  }
}

export default App

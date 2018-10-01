import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Search from './components/Search'
import IconBoxes from './components/IconBoxes'
import PopularPlaces from './components/PopularPlaces'
import Follow from './components/Follow'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Slider />
        <Search />
        <IconBoxes />
        <PopularPlaces />
        <Follow />
        <Gallery />
        <Contact />
      </React.Fragment>
    )
  }
}

export default App

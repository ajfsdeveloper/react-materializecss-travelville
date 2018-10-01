import React from 'react'

const Gallery = () => {
  return (
    <section id="gallery" className="section section-gallery scrollspy">
      <div className="container">
        <h4 className="center">
          <span className="blue-text">Photo</span> Gallery
        </h4>
        <div className="row">
          <div className="col s12 m3">
            <img
              src="https://source.unsplash.com/1600x900/?beach"
              alt="img1"
              className="materialboxed responsive-img"
            />
          </div>
          <div className="col s12 m3">
            <img
              src="https://source.unsplash.com/1600x900/?travel"
              alt="img1"
              className="materialboxed responsive-img"
            />
          </div>
          <div className="col s12 m3">
            <img
              src="https://source.unsplash.com/1600x900/?nature"
              alt="img1"
              className="materialboxed responsive-img"
            />
          </div>
          <div className="col s12 m3">
            <img
              src="https://source.unsplash.com/1600x900/?beach,travel"
              alt="img1"
              className="materialboxed responsive-img"
            />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m3">
            <img
              src="https://source.unsplash.com/1600x900/?water"
              alt="img1"
              className="materialboxed responsive-img"
            />
          </div>
          <div className="col s12 m3">
            <img
              src="https://source.unsplash.com/1600x900/?building"
              alt="img1"
              className="materialboxed responsive-img"
            />
          </div>
          <div className="col s12 m3">
            <img
              src="https://source.unsplash.com/1600x900/?trees"
              alt="img1"
              className="materialboxed responsive-img"
            />
          </div>
          <div className="col s12 m3">
            <img
              src="https://source.unsplash.com/1600x900/?cruise"
              alt="img1"
              className="materialboxed responsive-img"
            />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m3">
            <img
              src="https://source.unsplash.com/1600x900/?beaches"
              alt="img1"
              className="materialboxed responsive-img"
            />
          </div>
          <div className="col s12 m3">
            <img
              src="https://source.unsplash.com/1600x900/?traveling"
              alt="img1"
              className="materialboxed responsive-img"
            />
          </div>
          <div className="col s12 m3">
            <img
              src="https://source.unsplash.com/1600x900/?bridge"
              alt="img1"
              className="materialboxed responsive-img"
            />
          </div>
          <div className="col s12 m3">
            <img
              src="https://source.unsplash.com/1600x900/?beach,travel,boat"
              alt="img1"
              className="materialboxed responsive-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery

import React from 'react'
import GalleryItem from './GalleryItem'

const Gallery = () => {
  return (
    <section id="gallery" className="section section-gallery scrollspy">
      <div className="container">
        <h4 className="center">
          <span className="blue-text">Photo</span> Gallery
        </h4>
        <div className="row">
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
        </div>
        <div className="row">
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
        </div>
        <div className="row">
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
        </div>
      </div>
    </section>
  )
}

export default Gallery

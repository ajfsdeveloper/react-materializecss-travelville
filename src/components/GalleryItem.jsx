import React from 'react'

const getRandomNumber = () => Math.floor(Math.random() * 300)

const GalleryItem = () => {
  const randomNumber = getRandomNumber()

  return (
    <div className="col s12 m3">
      <img
        src={`https://source.unsplash.com/collection/2232034/1600x900/?sig=${randomNumber}`}
        alt={`img${randomNumber}`}
        className="materialboxed responsive-img"
      />
    </div>
  )
}

export default GalleryItem

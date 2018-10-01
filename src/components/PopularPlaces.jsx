import React from 'react'

const places = [
  { name: 'resort_1', title: 'Cancun, Mexico' },
  { name: 'resort_2', title: 'The Bahamas' },
  { name: 'resort_3', title: 'Nova Scotia' }
]

const PopularPlaces = () => {
  return (
    <section id="popular" className="section section-popular scrollspy">
      <div className="container">
        <div className="row">
          <h4 className="center">
            <span className="blue-text">Popular</span> Places
          </h4>
          {places.map(place => (
            <div className="col s12 m4" key={place.name}>
              <div className="card small">
                <div className="card-image">
                  <img
                    src={`/assets/images/${place.name}.jpg`}
                    alt={place.name}
                  />
                  <span className="card-title">{place.title}</span>
                </div>
                <div className="card-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  assumenda fugiat numquam, explicabo cum dignissimos.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularPlaces

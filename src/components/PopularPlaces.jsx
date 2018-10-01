import React from 'react'

const PopularPlaces = () => {
  return (
    <section id="popular" className="section section-popular scrollspy">
      <div className="container">
        <div className="row">
          <h4 className="center">
            <span className="blue-text">Popular</span> Places
          </h4>
          <div className="col s12 m4">
            <div className="card small">
              <div className="card-image">
                <img src="/assets/images/resort_1.jpg" alt="resort_1" />
                <span className="card-title">Cancun, Mexico</span>
              </div>
              <div className="card-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                assumenda fugiat numquam, explicabo cum dignissimos.
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card small">
              <div className="card-image">
                <img src="/assets/images/resort_2.jpg" alt="resort_2" />
                <span className="card-title">The Bahamas</span>
              </div>
              <div className="card-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                assumenda fugiat numquam, explicabo cum dignissimos.
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card small">
              <div className="card-image">
                <img src="/assets/images/resort_3.jpg" alt="resort_3" />
                <span className="card-title">Nova Scotia</span>
              </div>
              <div className="card-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                assumenda fugiat numquam, explicabo cum dignissimos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularPlaces

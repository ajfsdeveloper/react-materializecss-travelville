import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="section section-contact scrollspy">
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <div className="card-panel blue white-text center">
              <i className="material-icons">email</i>
              <h5>Contact Us For Booking</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                alias. Voluptates nihil fugit sapiente amet odit nesciunt, sint
                mollitia aperiam?
              </p>
            </div>
            <ul className="collection with-header">
              <li className="collection-header">
                <h4>Location</h4>
              </li>
              <li className="collection-item">Travelville Agency</li>
              <li className="collection-item">555 Beach rd, Suite 33</li>
              <li className="collection-item">Miami, FL 55555</li>
            </ul>
          </div>
          <div className="col s12 m6">
            <div className="card-panel grey lighten-3">
              <h5>Please fill out this form</h5>
              <div className="input-field">
                <input type="text" placeholder="Name" />
              </div>
              <div className="input-field">
                <input type="text" placeholder="Email" />
              </div>
              <div className="input-field">
                <input type="text" placeholder="Phone" />
              </div>
              <div className="input-field">
                <textarea
                  className="materialize-textarea"
                  placeholder="Enter Message"
                />
              </div>
              <input type="submit" value="Submit" className="btn" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

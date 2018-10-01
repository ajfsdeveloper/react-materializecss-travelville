import React from 'react'

const styles = {
  margin: '5px 10px'
}

const Follow = () => {
  return (
    <section className="section blue darken-2 white-text center">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h4>Follow Travelville</h4>
            <p>Follow us on social media for special offers</p>
            <a href="#!" className="white-text">
              <i className="fab fa-facebook fa-4x" style={styles} />
            </a>
            <a href="#!" className="white-text">
              <i className="fab fa-twitter fa-4x" style={styles} />
            </a>
            <a href="#!" className="white-text">
              <i className="fab fa-linkedin fa-4x" style={styles} />
            </a>
            <a href="#!" className="white-text">
              <i className="fab fa-google-plus fa-4x" style={styles} />
            </a>
            <a href="#!" className="white-text">
              <i className="fab fa-pinterest fa-4x" style={styles} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Follow

import React from 'react'

const styles = {
  margin: '5px 10px'
}

const followData = [
  { site: 'facebook' },
  { site: 'twitter' },
  { site: 'linkedin' },
  { site: 'google-plus' },
  { site: 'pinterest' }
]

const Follow = () => {
  return (
    <section className="section blue darken-2 white-text center">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h4>Follow Travelville</h4>
            <p>Follow us on social media for special offers</p>
            {followData.map(data => (
              <a href="#!" className="white-text" key={data.site}>
                <i className={`fab fa-${data.site} fa-4x`} style={styles} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Follow

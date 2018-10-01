import React from 'react'

const boxesData = [
  { iconClass: 'room', text: 'Pick Where' },
  { iconClass: 'store', text: 'Travel Shop' },
  { iconClass: 'airplanemode_active', text: 'Fly Cheap' }
]

const IconBoxes = () => {
  return (
    <section className="section section-icons grey lighten-4 center">
      <div className="container">
        <div className="row">
          {boxesData.map(box => (
            <div className="col s12 m4" key={box.iconClass}>
              <div className="card-panel">
                <i className="material-icons large blue-text">
                  {box.iconClass}
                </i>
                <h4>{box.text}</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  blanditiis.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IconBoxes

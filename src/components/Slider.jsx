import React from 'react'

const sliderData = [
  {
    name: 'resort_1',
    title: 'Take Your Dream Vacation',
    alignClass: 'center-align'
  },
  {
    name: 'resort_2',
    title: 'We Work With All Budgets',
    alignClass: 'left-align'
  },
  {
    name: 'resort_3',
    title: 'Group & Individual Getaways',
    alignClass: 'right-align'
  }
]

const Slider = () => {
  return (
    <div className="slider">
      <ul className="slides">
        {sliderData.map(slider => (
          <li key={slider.name}>
            <img src={`/assets/images/${slider.name}.jpg`} alt={slider.name} />
            <div className={`caption ${slider.alignClass}`}>
              <h2>{slider.title}</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                natus voluptas culpa iure molestias alias, labore esse ipsa
                libero velit!
              </h5>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Slider

import React from 'react'

const Slider = () => {
  return (
    <div className="slider">
      <ul className="slides">
        <li>
          <img src="/assets/images/carousel1.jpg" alt="img1" />
          <div className="caption center-align">
            <h2>Take Your Dream Vacation</h2>
            <h5 className="light grey-text text-lighten-3 hide-on-small-only">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              natus voluptas culpa iure molestias alias, labore esse ipsa libero
              velit!
            </h5>
          </div>
        </li>
        <li>
          <img src="/assets/images/carousel2.jpg" alt="img2" />
          <div className="caption left-align">
            <h2>We Work With All Budgets</h2>
            <h5 className="light grey-text text-lighten-3 hide-on-small-only">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              consectetur architecto sint facere beatae sed doloremque labore
              exercitationem assumenda suscipit?
            </h5>
          </div>
        </li>
        <li>
          <img src="/assets/images/carousel3.jpg" alt="img3" />
          <div className="caption right-align">
            <h2>Group & Individual Getaways</h2>
            <h5 className="light grey-text text-lighten-3 hide-on-small-only">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              dignissimos voluptatum ex natus in. Eum inventore ut amet porro
              dolore!
            </h5>
          </div>
        </li>
        <li>
          <img src="/assets/images/carousel4.jpg" alt="img4" />
          <div className="caption center-align">
            <h2>This is our big Tagline!</h2>
            <h5 className="light grey-text text-lighten-3 hide-on-small-only">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et optio
              iste dolorum beatae illo perferendis qui voluptate quae quidem
              animi.
            </h5>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Slider

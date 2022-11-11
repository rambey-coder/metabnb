import React from 'react'
import Modal from './Modal'

const Section = () => {
  return (
    <div className="container">
      <Modal />
      <div className="section">
        <div className="txt-sec">
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span>
          </h1>
          <p>
          we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
          </p>

          <div className="inpts">
            <input type="text"
            placeholder='Search for location'
             />
            <input type="submit"
            value='Search'
             />
          </div>
        </div>

        <div className="img-sec">
          <img src="/assets/hero-image.png" alt="heroImage" />
        </div>
      </div>
    </div>
  )
}

export default Section
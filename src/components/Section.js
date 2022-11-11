import React from 'react'
import Modal from './Modal'

const Section = () => {
  return (
    <div>
      <Modal />
      <div className="container">
        {/* HERRO-SECTION */}
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
      {/*  */}

      {/* LOGO-LABEL */}
      <div className="icon-label">
        <div className="container icon-container">
          <img src="/assets/mb-token.svg" alt="token" />
          <img src="/assets/metamask.svg" alt="metamask" />
          <img src="/assets/opeansea.svg" alt="opensea" />
        </div>
      </div>
      {/*  */}

      {/* INSPIRATIONS */}
      {/* If your working on the general front-end task. For responsive design, the mobile screens should be one in a row, the tablet should be 2 in a row, while the desktop should maintain 4in a row as in the UI Design. */}
      <div className="container">
        <div className="inspiration">
          <h1>Inspiration for your next adventure</h1>

          <div className="card-container">
            <div className="card">
              <img src="/assets/desert-king9.png" alt="desertKing" />
              <span>
                <p>Desert King</p>
                <p>1MBT per night</p>
              </span>
              <span>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
              </span>
                <img src="/assets/star.svg" alt="rating" />
            </div>
            <div className="card">
              <img src="/assets/desert-king2.png" alt="desertKing" />
              <span>
                <p>Desert King</p>
                <p>1MBT per night</p>
              </span>
              <span>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
              </span>
                <img src="/assets/star.svg" alt="rating" />
            </div>
            <div className="card">
              <img src="/assets/desert-king3.png" alt="desertKing" />
              <span>
                <p>Desert King</p>
                <p>1MBT per night</p>
              </span>
              <span>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
              </span>
                <img src="/assets/star.svg" alt="rating" />
            </div>
            <div className="card">
              <img src="/assets/desert-king4.png" alt="desertKing" />
              <span>
                <p>Desert King</p>
                <p>1MBT per night</p>
              </span>
              <span>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
              </span>
                <img src="/assets/star.svg" alt="rating" />
            </div>
            <div className="card">
              <img src="/assets/desert-king5.png" alt="desertKing" />
              <span>
                <p>Desert King</p>
                <p>1MBT per night</p>
              </span>
              <span>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
              </span>
                <img src="/assets/star.svg" alt="rating" />
            </div>
            <div className="card">
              <img src="/assets/desert-king6.png" alt="desertKing" />
              <span>
                <p>Desert King</p>
                <p>1MBT per night</p>
              </span>
              <span>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
              </span>
                <img src="/assets/star.svg" alt="rating" />
            </div>
            <div className="card">
              <img src="/assets/desert-king7.png" alt="desertKing" />
              <span>
                <p>Desert King</p>
                <p>1MBT per night</p>
              </span>
              <span>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
              </span>
                <img src="/assets/star.svg" alt="rating" />
            </div>
            <div className="card">
              <img src="/assets/desert-king8.png" alt="desertKing" />
              <span>
                <p>Desert King</p>
                <p>1MBT per night</p>
              </span>
              <span>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
              </span>
                <img src="/assets/star.svg" alt="rating" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
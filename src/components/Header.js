import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="container">
      <div className="nav">
       <Link to='/'>
        <img src="/assets/meta-logo.svg" alt="logo" />
       </Link>

        <div className="lists">
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/place'>Place to stay</Link>
          </li>

          <li>NFTs</li>

          <li>Community</li>
        </div>

        <button>Connect Wallet</button>
      </div>
    </div>
  )
}

export default Header
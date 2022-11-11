import React from 'react'

const Section = () => {
  return (
    <div className="container">
      <div className="connect-wallet">
        <div className="connect">
          <div>
            <h3>Connect Wallet</h3>
            <img src="/assets/close.svg" alt="close" className='close' />
          </div>
            <div className="line"></div>
          <div>
            <p>Choose your preferred wallet:</p>
            <div className="wallet">
              <div>
                <img src="/assets/meta-wallet.svg" alt="metamask" />
                <h3>Metamask</h3>
              </div>
              <img src="/assets/arrow.svg" alt="arrow" />
            </div>
            <div className="wallet">
              <div>
                <img src="/assets/connect-wallet.svg" alt="walletConnect" />
                <h3>WalletConnect</h3>
              </div>
              <img src="/assets/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
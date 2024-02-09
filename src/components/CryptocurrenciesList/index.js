import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptocurrenciesData} = this.props
    return (
      <div className="cryptocurrency-tracker-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-image"
        />
        <div className="cryptocurrency-list-container">
          <div className="titles-container">
            <p className="title">Coin Type</p>
            <div className="usd-and-euro-titles">
              <p className="title usd">USD</p>
              <p className="title">EURO</p>
            </div>
          </div>
          <ul className="cryptocurrency-list">
            {cryptocurrenciesData.map(eachItem => (
              <CryptocurrencyItem
                cryptocurrencyData={eachItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList

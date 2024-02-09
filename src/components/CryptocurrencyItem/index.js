import './index.css'

const CryptoCurrencyItem = props => {
  const {cryptocurrencyData} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = cryptocurrencyData
  return (
    <li className="cryptocurrency-item">
      <div className="logo-and-name-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-and-euro-container">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptoCurrencyItem

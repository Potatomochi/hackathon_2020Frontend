import React  from 'react';
import './data.css'

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      items: [],
      isLoaded: false,
    }
  }
  componentDidMount() {
    const stockUrl = 'https://hackathon2020backend.herokuapp.com/api/stocks'
    fetch(stockUrl)
      .then((res) => res.json())
      .then(json => {
        this.setState({
          isLoaded:true,
          items: json,
        })
        console.log(json)
        console.log(json.high)
      });
  };

  render() {
    var { isLoaded , items } =this.state;
    const names = items.ticker
    const openPrices = items.priceOpen
    const lastPrices = items.priceLast
    const highPrices = items.priceHigh
    const lowPrices = items.priceLow
    const closings = items.Close

    console.log(items.high)
    if(!isLoaded) {
      return <div><p>Loading Data In...</p></div>
    }

    else {
      return (
        <div className="dataList">
          <p>
          Stocks Loaded.
          </p>
          <div className="dataStock">

          <ul>
            {names.map(name => <li key={name}>{name}</li>)}
          </ul>
            
          <ul>
            {openPrices.map(openPrice => <li key={openPrice}>{openPrice}</li>)}
          </ul>
            
          <ul>
            {lastPrices.map(lastPrice => <li key={lastPrice}>{lastPrice}</li>)}
          </ul>
            
          <ul>
            {highPrices.map(highPrice => <li key={highPrice}>{highPrice}</li>)}
          </ul>
            
          <ul>
            {lowPrices.map(lowPrice => <li key={lowPrice}>{lowPrice}</li>)}
          </ul>
            
          <ul>
            {closings.map(closing => <li key={closing}>{closing}</li>)}
          </ul>
          </div>

        </div>
      )
      }

  }
}
export default Data;




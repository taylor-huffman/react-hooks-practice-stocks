import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
const API = 'http://localhost:3001/stocks'

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sort, setSort] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(stocks => setStocks(stocks))
  }, [])

  useEffect(() => {
    if (sort === 'Alphabetically') {
      const sortedStocks = sortByName()
      setStocks(sortedStocks)
    } else {
      const sortedStocks = sortByPrice()
      setStocks(sortedStocks)
    }
  }, [sort])


  function sortByName() {
    return [...stocks].sort(function(a, b) {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
  }


  function sortByPrice() {
    return [...stocks].sort(function (a, b) {
      return a.price - b.price;
    });
  }


  function handleSetPortfolio(newStock) {
      if (!portfolio.includes(newStock)) {
        setPortfolio([...portfolio, newStock])
      } else {
        alert('You have already purchased this stock!')
      }
  }

  function handleRemoveFromPortfolio(removedStock) {
    setPortfolio([...portfolio].filter(stock => stock.id !== removedStock.id))
  }

  function sortStocks(e) {
    setSort(e.target.value)
  }

  function filterStocks(e) {
    setFilter(e.target.value)
  }


  const displayStocks = stocks.filter(stock => {
    if (filter === '') return true 
    return stock.type === filter
  })

  return (
    <div>
      <SearchBar sortStocks={sortStocks} sort={sort} filterStocks={filterStocks} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={displayStocks} handleSetPortfolio={handleSetPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} handleSetPortfolio={handleRemoveFromPortfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

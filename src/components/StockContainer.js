import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleSetPortfolio }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => {
        return <Stock key={stock.id} stock={stock} handleSetPortfolio={handleSetPortfolio} />
      })}
    </div>
  );
}

export default StockContainer;

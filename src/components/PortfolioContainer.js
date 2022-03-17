import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, handleSetPortfolio }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map(stock => <Stock key={stock.id} stock={stock} handleSetPortfolio={handleSetPortfolio} />)}
    </div>
  );
}

export default PortfolioContainer;

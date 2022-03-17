import React from "react";

function Stock({ stock, handleSetPortfolio }) {

  const {ticker, name, price} = stock

  function handleOnClick() {
    handleSetPortfolio(stock)
  }

  return (
    <div>
      <div onClick={handleOnClick} className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{`${ticker}: ${price}`}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

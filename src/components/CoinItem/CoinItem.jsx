import React from 'react';

function CoinItem({ coin }) {
  const { 
    image, name, current_price, symbol } = coin;

  return (
    <div className="card shadow h-75 p-5 mt-5 mb-5 d-flex justify-content-center align-items-center">
      <div className="p-3">
        <img src={image} alt={name} width="100px" />
      </div>
      <p>
        <b>{name}</b>
      </p>
      <p>{symbol.toUpperCase()}</p>
      <p>${current_price}</p>
    </div>
  );
}

export { CoinItem };

import React from "react";

function CoinItem({ coin }) {
  return (
    <div className="card shadow h-75 p-5 mt-5 mb-5 d-flex justify-content-center align-items-center">
      <div className="p-3">
        <img src={coin.image} alt={coin.name} width="100px" />
      </div>
      <p>
        <b>{coin.name}</b>
      </p>
      <p>{coin.symbol.toUpperCase()}</p>
      <p>$ {coin.current_price}</p>
    </div>
  );
}

export { CoinItem };

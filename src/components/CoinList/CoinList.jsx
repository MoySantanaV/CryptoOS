import React from "react";
import { CoinItem } from "../CoinItem/CoinItem";

function CoinList({ coins }) {
  return (
    <div>
      <div className="row">
        {coins &&
          coins.map((coin) => (
            <div className="col" key={coin.id}>
              <CoinItem key={coin.id} coin={coin} />
            </div>
          ))}
      </div>
    </div>
  );
}

export { CoinList };
import React from "react";
import { CoinItem } from "../CoinItem/CoinItem";

function CoinList({ coins }) {
  return (
    <div>
      <div className="row">
        {coins &&
          coins.map((coin, index) => (
            <div className="col" key={index}>
              <CoinItem key={coin.id} coin={coin} />
            </div>
          ))}
      </div>
    </div>
  );
}

export { CoinList };

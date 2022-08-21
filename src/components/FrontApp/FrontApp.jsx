import React from "react";
import { CoinHeader } from "../CoinHeader/CoinHeader";
import { CoinSearcher } from "../CoinSearcher/CoinSearcher";
import { CoinSorter } from "../CoinSorter/CoinSorter";
import { CoinList } from "../CoinList/CoinList";
import { CoinItem } from "../CoinItem/CoinItem";
import { CoinContext } from "../CoinContext/CoinContext";

function FrontApp() {
  const { searchedCoins, onCounterResults, onSortName, onSortPrice } =
    React.useContext(CoinContext);

  return (
    <div className="container">
      <CoinHeader coins={searchedCoins} onCounterResults={onCounterResults} />
      <CoinSearcher />
      <CoinSorter onSortName={onSortName} onSortPrice={onSortPrice} />
      <CoinList coins={searchedCoins}>
        <CoinItem />
      </CoinList>
    </div>
  );
}

export { FrontApp };

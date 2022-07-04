import React from "react";
import { CoinHeader } from "../CoinHeader/CoinHeader";
import { CoinSearcher } from "../CoinSearcher/CoinSearcher";
import { CoinSorter } from "../CoinSorter/CoinSorter";
import { CoinList } from "../CoinList/CoinList";
import { CoinItem } from "../CoinItem/CoinItem";
import { CoinContext } from "../CoinContext/CoinContext";

function FrontApp() {
  const {
    searchedCoins,
    counterResults,
    sortingName,
    sortPrice,
  } = React.useContext(CoinContext);

  return (
    <div className="container">
      <CoinHeader coins={searchedCoins} onCounterResults={counterResults} />
      <CoinSearcher />
      <CoinSorter onSortName={sortingName} onSortPrice={sortPrice} />
      <CoinList coins={searchedCoins}>
        <CoinItem />
      </CoinList>
    </div>
  );
}

export { FrontApp };

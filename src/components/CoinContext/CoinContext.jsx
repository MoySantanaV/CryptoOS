import React, { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CoinContext = React.createContext();

function CoinProvider(props) {
  const [coins, setCoins] = React.useState([]);
  const [coinsNoSorted, setCoinsNoSorted] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [results, setResults] = React.useState(5);
  const [searchCoin, setSearchCoin] = React.useState("");
  let searchedCoins = [];

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${results}&page=1&sparkline=false`;

  useEffect(() => {
    const getCoins = async (URI) => {
      try {
        const response = await axios(URI);
        setCoins(response.data);
        setCoinsNoSorted(response.data);
      } catch (err) {
        setError(err);
      }
    };
    getCoins(url);
  }, [results]);

  if (!searchCoin.length >= 1) {
    searchedCoins = coins;
  } else {
    searchedCoins = coins.filter((coin) => {
      const coinName = coin.name.toLowerCase().trim();
      const searchName = searchCoin.toLowerCase().trim();
      return coinName.includes(searchName);
    });
  }

  function onCounterResults() {
    if (results < 30) {
      const acumulador = results + 5;
      setResults(acumulador);
    } else {
      toast.success("You have reached the limit of cryptos to view");
    }
  }
  const comparator = (a, b, key) => {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  };

  function onSortName(e) {
    switch (e.target.value) {
      case "Select:":
        setCoins(coinsNoSorted);
        break;
      case "Ascending":
        setCoins([].concat(coins).sort((a, b) => comparator(a, b, "name")));
        break;
      case "Descending":
        setCoins([].concat(coins).sort((b, a) => comparator(a, b, "name")));
        break;
    }
  }

  function onSortPrice(e) {
    switch (e.target.value) {
      case "Select:":
        setCoins(coinsNoSorted);
        break;
      case "Highest":
        setCoins(
          [].concat(coins).sort((a, b) => comparator(b, a, "current_price"))
        );
        break;
      case "Lowest":
        setCoins(
          [].concat(coins).sort((a, b) => comparator(a, b, "current_price"))
        );
        break;
    }
  }

  return (
    <CoinContext.Provider
      value={{
        error,
        searchedCoins,
        onCounterResults,
        setSearchCoin,
        onSortName,
        onSortPrice,
      }}
    >
      {props.children}
    </CoinContext.Provider>
  );
}

export { CoinContext, CoinProvider };

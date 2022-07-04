import React, { useEffect } from "react";
import axios from "axios";

const CoinContext = React.createContext();

function CoinProvider(props) {
  const [coins, setCoins] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [results, setResults] = React.useState(5);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${results}&page=1&sparkline=false`;

  useEffect(() => {
    const getCoins = async (url) => {
      try {
        const response = await axios(url);
        setCoins(response.data);
      } catch (error) {
        setError(error);
      }
    };
    getCoins(url);
  }, [results]);

  const [searchCoin, setSearchCoin] = React.useState("");

  let searchedCoins = [];

  if (!searchCoin.length >= 1) {
    searchedCoins = coins;
  } else {
    searchedCoins = coins.filter((coin) => {
      const coinName = coin.name.toLowerCase().trim();
      const searchName = searchCoin.toLowerCase().trim();
      return coinName.includes(searchName);
    });
  }

  function counterResults() {
    if (results < 30) {
      const acumulador = results + 5;
      setResults(acumulador);
    } else {
      alert("You has reached the limit");
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

  function sortingName(e) {
    if (e.target.value === "Ascending") {
      setCoins([].concat(coins).sort((a, b) => comparator(a, b, "name")));
    } else if (e.target.value === "Descending") {
      setCoins([].concat(coins).sort((a, b) => comparator(b, a, "name")));
    } else {
      setCoins(searchCoin);
    }
  }

  function sortPrice(e) {
    if (e.target.value === "Highest") {
      setCoins(
        [].concat(coins).sort((a, b) => comparator(b, a, "current_price"))
      );
    } else {
      setCoins(
        [].concat(coins).sort((a, b) => comparator(a, b, "current_price"))
      );
    }
  }

  return (
    <CoinContext.Provider
      value={{
        error,
        searchedCoins,
        counterResults,
        setSearchCoin,
        sortingName,
        sortPrice,
      }}
    >
      {props.children}
    </CoinContext.Provider>
  );
}

export { CoinContext, CoinProvider };

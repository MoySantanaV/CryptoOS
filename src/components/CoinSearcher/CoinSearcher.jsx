import React from "react";
import { CoinContext } from "../CoinContext/CoinContext";
import { Form } from "react-bootstrap";

function CoinSearcher() {
  const { searchCoin, setSearchCoin } = React.useContext(CoinContext);

  const onChangeSearchCoin = (e) => {
    setSearchCoin(e.target.value);
  };

  return (
    <div className="text-center justify-content-center">
      <p className="text-center mt-1">
        <b>Search</b>
      </p>
      <Form.Control
        value={searchCoin}
        onChange={onChangeSearchCoin}
        placeholder="Bincoin, Etherium..."
      />
    </div>
  );
}

export { CoinSearcher };
import React from "react";
import Stack from "react-bootstrap/Stack";

function CoinHeader({ coins, onCounterResults }) {
  const sumMarketCap = coins.reduce((acc, curr) => acc + curr.current_price, 0);
  const LimitMarketCap = sumMarketCap.toFixed(2);
  return (
    <div className="mt-5 ">
      <div>
        <div>
          <h1 className="mb-5 text-center">
            Cypto Currencies OS
            <button
              className="btn btn-outline-light"
              onClick={onCounterResults}
            >
              <img
                src="https://us.123rf.com/450wm/vectora/vectora1611/vectora161101227/66591185-flecha-circular-c%C3%ADrculo-icono-de-la-flecha-rotaci%C3%B3n-reinicio-torsi%C3%B3n-vuelta-concepto-de-icono-bot%C3%B3n.jpg"
                alt="moreCoins"
                height="20"
                width="20"
              />
            </button>
          </h1>
        </div>
        <hr />
      </div>

      <Stack direction="horizontal">
        <p className="">Results: {coins.length}</p>
        <p className="ms-auto">Sum Market Cap: {LimitMarketCap} </p>
      </Stack>
    </div>
  );
}

export { CoinHeader };
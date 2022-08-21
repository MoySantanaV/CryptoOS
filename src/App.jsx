import React from 'react';
import { CoinProvider } from './components/CoinContext/CoinContext';
import { FrontApp } from './components/FrontApp/FrontApp';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <CoinProvider>

      <FrontApp />
      <ToastContainer/>

    </CoinProvider>

  );
}

export default App;

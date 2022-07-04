import React from 'react';
/* import './App.css'; */
import { CoinProvider } from './components/CoinContext/CoinContext';
import { FrontApp } from './components/FrontApp/FrontApp';

function App() {
  return (
    <CoinProvider>

      <FrontApp />

    </CoinProvider>

  );
}

export default App;

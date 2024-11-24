import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

window.InjectedConfig = {
  networkId: "mainnet",
  nodeUrl: "https://free.rpc.fastnear.com/",
  walletUrl: "https://app.mynearwallet.com/",
  explorerUrl: "https://nearblocks.io/",
  socialsContractId: "social.near",
  fastAuth: false,
  enableWeb4FastAuth: false
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

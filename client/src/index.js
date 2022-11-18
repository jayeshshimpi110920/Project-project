import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { CookiesProvider } from 'react-cookie';



ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <PersistGate persistor={persistor}>
        <CookiesProvider>
        <App />
        </CookiesProvider>
      </PersistGate>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);


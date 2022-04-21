import React from "react";
import App from "./App";
import "./index.css";
import { makeServer } from "./server";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ModalContextProvider } from "./Context/ModalContext";
import {store} from "./Store/Store"
import { Provider } from "react-redux";
 

// Call make Server
makeServer();

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
   <Provider store={store}>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
    </Provider>
  </BrowserRouter>
);

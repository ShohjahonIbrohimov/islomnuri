import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import AxiosConfig from "./config/AxiosConfig";
import { Toaster } from "react-hot-toast";
// REDUX
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// ROUTE
import { BrowserRouter as Router } from "react-router-dom";
// STYLES
import "./styles/main.css";
import "boxicons";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AxiosConfig>
          <Toaster />
          <App />
        </AxiosConfig>
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById("root")
);

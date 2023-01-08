import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { ColorModeScript } from "@chakra-ui/react";

import App from "./App";
import { URQLProvider } from "./lib/urql";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ColorModeScript />
    <URQLProvider>
      <App />
    </URQLProvider>
  </React.StrictMode>,
);

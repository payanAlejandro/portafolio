import React from "react";
import ReactDOM from "react-dom/client";
import Papel from "./Papel.jsx";

import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/500.css";
import "@fontsource/public-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/caveat/400.css";
import "@fontsource/caveat/600.css";
import "./papel.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Papel />
  </React.StrictMode>
);

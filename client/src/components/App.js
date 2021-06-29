import React from "react";
import Streams from "./Streams";

import "../assets/css/tailwind.css";

const App = () => {
  return (
    <div className="px-8">
      <h1>Dev Streams</h1>
      <h3 className="subtitle">
        A curated list of streams featuring live programming and development
      </h3>
      <Streams />
    </div>
  );
};

export default App;

import React from "react";
import Streams from "./Streams";

const App = () => {
  return (
    <div>
      <h1>Dev Streams</h1>
      <h3 className="subtitle">
        A curated list of streams featuring live programming and development
      </h3>
      <Streams />
    </div>
  );
};

export default App;

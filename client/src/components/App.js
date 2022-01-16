import React from "react";
import Streams from "./Streams";

import "../assets/css/tailwind.css";

const App = () => {
  return (
    <main className="py-8 px-8">
      <h1 className="text-4xl my-3">Dev Streams</h1>
      <h3 className="subtitle text-lg my-2">
        A curated list of streams featuring live programming and development
      </h3>
      <p className="text-md">
        Created by{" "}
        <a
          className="text-twitch hover:text-gray-900"
          href="https://github.com/geraldiner"
          target="_blank"
          rel="noopener noreferrer"
        >
          @geraldiner
        </a>
      </p>
      <Streams />
    </main>
  );
};

export default App;

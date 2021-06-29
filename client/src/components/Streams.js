import React, { useState, useEffect } from "react";
import axios from "axios";
import Stream from "./Stream";

const Streams = () => {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    async function fetchStreams() {
      const res = await axios.get("http://localhost:8888/streams");
      const data = await res.data;
      setStreams(data);
    }
    fetchStreams();
  }, []);

  return (
    <div>
      {streams.map((streamer) => {
        return <Stream key={streamer.userId} streamer={streamer} />;
      })}
    </div>
  );
};

export default Streams;

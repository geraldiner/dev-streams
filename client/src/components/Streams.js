import React, { useState, useEffect } from "react";
import axios from "axios";
import Stream from "./Stream";

const Streams = () => {
  const STREAMS_URI =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:8888/streams"
      : "https://dev-streams.herokuapp.com/streams";
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    async function fetchStreams() {
      const res = await axios.get(STREAMS_URI);
      const data = await res.data;
      setStreams(data);
    }
    fetchStreams();
  }, []);

  return (
    <section className="container mx-auto">
      <section className="streams flex flex-wrap -mx-4">
        {streams.map((streamer) => {
          return <Stream key={streamer.userId} streamer={streamer} />;
        })}
      </section>
    </section>
  );
};

export default Streams;

import React from "react";

const Stream = ({ streamer }) => {
  return (
    <div>
      <p>
        {`${streamer.userDisplayName} is streaming ${streamer.streamTitle}`}
      </p>
    </div>
  );
};

export default Stream;

import React from "react";

const Stream = ({ streamer }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
      <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div className="relative pb-48 overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={streamer.thumbnailUrl}
            alt={streamer.streamTitle}
          />
        </div>
        {`${streamer.userDisplayName} is streaming ${streamer.streamTitle}`}
      </div>
    </div>
  );
};

export default Stream;

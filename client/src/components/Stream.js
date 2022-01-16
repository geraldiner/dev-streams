import React from "react";

const Stream = ({ streamer }) => {
  return (
    <div className="stream w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
      <div className="c-card block bg-white shadow-md overflow-hidden">
        <div className="relative pb-48 overflow-hidden">
          <img
            className="thumbnail absolute inset-0 h-full w-full object-cover"
            src={streamer.thumbnailUrl}
            alt={streamer.title}
          />
        </div>
        <div className="stream-info h-auto p-5">
          <div className="ml-3">
            <p className="font-bold leading-4 mb-3">
              {streamer.streamTitle.length > 50
                ? streamer.streamTitle.substring(0, 50).concat("...")
                : streamer.streamTitle}
            </p>
            <p>{streamer.userDisplayName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stream;

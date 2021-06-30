import React from "react";

const Stream = ({ streamer }) => {
  return (
    <div className="stream w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
      <div className="c-card block bg-white overflow-hidden">
        <div className="relative pb-48 overflow-hidden">
          <img
            className="thumbnail absolute inset-0 h-full w-full object-cover"
            src={streamer.thumbnailUrl}
            alt={streamer.title}
          />
        </div>
        <div className="stream-info h-auto p-5">
          <div className="ml-3">
            <a
              href={`https://twitch.tv/${streamer.userDisplayName}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="font-bold leading-4 mb-3">
                {streamer.streamTitle.length > 50
                  ? streamer.streamTitle.substring(0, 50).concat("...")
                  : streamer.streamTitle}
              </p>
            </a>
            <p>{streamer.userDisplayName}</p>
            <div className="tags py-5">
              {streamer.tags.map((tag) => {
                console.log(tag);
                if (tag !== null) {
                  return (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {tag}
                    </span>
                  );
                } else {
                  return <span></span>;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stream;

const express = require("express");
const router = express.Router();
const path = require("path");
const twitch = require("./util/twitch_api")();
const twitchInfo = require("./util/twitch");
const { tagIds } = require("./util/twitch");

// @desc    Get the home page
// @route   GET /
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

// @desc    Get list of streams
// @route   GET /streams
router.get("/streams", async (req, res) => {
  const resp = await twitch.helix.streams.getStreams({
    game: twitchInfo.gameIds["Science & Technology"],
    limit: "100",
  });

  const data = await resp.data;
  const streams = [];
  data.map((d) => {
    let obj = {
      userId: d.userId,
      userDisplayName: d.userDisplayName,
      language: d.language,
      tagIds: d.tagIds,
      thumbnailUrl: d.thumbnailUrl,
      streamTitle: d.title,
      viewers: d.viewers,
    };
    streams.push(obj);
  });
  return res.status(200).send(JSON.stringify(streams));
});

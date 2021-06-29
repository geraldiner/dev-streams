const path = require("path");
const twitch = require("../util/twitch_api")();
const twitchInfo = require("../util/twitch");

module.exports = {
  getIndex: (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  },
  getStreams: async (req, res) => {
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
        thumbnailUrl: d.thumbnailUrl
          .replace("{height}", "640")
          .replace("{width}", "480"),
        streamTitle: d.title,
        viewers: d.viewers,
      };
      streams.push(obj);
    });
    return res.status(200).send(JSON.stringify(streams));
  },
};

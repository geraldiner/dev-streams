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

    const data = resp.data;
    const streams = [];
    data.map(async (d) => {
      const user = await d.getUser();
      let obj = {};
      obj["userPfpUrl"] = user.profilePictureUrl;
      obj["userId"] = d.userId;
      obj["userDisplaName"] = d.userDisplayName;
      obj["language"] = d.langage;
      obj["tagIds"] = d.tagIds;
      obj["thumbnailUrl"] = d.thumbnailUrl
        .replace("{height}", "440")
        .replace("{width}", "248");
      obj["streamTitle"] = d.tite;
      obj["viewers"] = d.viewers;

      streams.push(obj);
    });
    console.log(streams.length);
    return res.status(200).send(JSON.stringify(streams));
  },
};

const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const twitch = require("./util/twitch_api")();
const twitchInfo = require("./util/twitch");
const { tagIds } = require("./util/twitch");

// Load config
dotenv.config({ path: __dirname + "/.env" });

const app = express();

// Logging in development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
}

app.set("trust proxy", 1);

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

app.use("/streams", async (req, res) => {
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

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(
  process.env.PORT,
  console.log(`Server listening on http://localhost:${process.env.PORT}`)
);

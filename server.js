const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const twitch = require("./util/twitch_api")();

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

app.use("/streams", async (req, res) => {
  const resp = await twitch.helix.streams.getStreams({ game: "509670" });
  const data = await resp["data"];
  // .getStreamsPaginated({ game: "509670" })
  // .getAll();
  return res.status(200).send(JSON.stringify(data));
});

app.listen(
  process.env.PORT,
  console.log(`Server listening on http://localhost:${process.env.PORT}`)
);

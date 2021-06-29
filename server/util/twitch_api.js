const { ClientCredentialsAuthProvider } = require("twitch-auth");
const { ApiClient } = require("twitch");

require("dotenv").config("../.env");

const apiClient = () => {
  const clientId = process.env.TWITCH_CLIENT;
  const clientSecret = process.env.TWITCH_SECRET;

  const authProvider = new ClientCredentialsAuthProvider(
    clientId,
    clientSecret
  );
  return new ApiClient({ authProvider });
};

module.exports = apiClient;

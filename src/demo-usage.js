const axios = require("axios");
const _ = require("lodash");
const minimist = require("minimist");

async function fetchUser(userId) {
  const url = `https://example.com/users/${userId}`;
  const res = await axios.get(url);
  return res.data;
}

function parseArgs(argv) {
  const args = minimist(argv.slice(2));
  return _.pick(args, ["id", "verbose"]);
}

module.exports = { fetchUser, parseArgs };

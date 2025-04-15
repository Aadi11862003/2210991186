const axios = require("axios");
const NodeCache = require("node-cache");

const cache = new NodeCache();
const TEST_SERVER = "http://20.244.56.144/evaluation-service";

const AUTH_CREDENTIALS = {
  email: "aditya1186.be22@chitkara.edu.in",
  name: "aditya bhardwaj",
  rollNo: "2210991186",
  accessCode: "PwzufG",
  clientID: "678624ed-e9cf-4d60-90c8-a430e0cf9ee0",
  clientSecret: "TcSUfUGZctVksung",
};

async function initializeAuth() {
  try {
    const response = await axios.post(`${TEST_SERVER}/auth`, AUTH_CREDENTIALS);
    const { access_token, expires_in } = response.data;

    cache.set(
      "authToken",
      access_token,
      Math.floor(expires_in - Date.now() / 1000)
    );
    return access_token;
  } catch (error) {
    console.error("Auth failed:", error);
    throw error;
  }
}

function getAuthToken() {
  return cache.get("authToken");
}

module.exports = { initializeAuth, getAuthToken };

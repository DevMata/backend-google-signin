const { OAuth2Client } = require("google-auth-library");

const CLIENT_ID =
  "206296462575-4aue8scpefk2h5ksgk18ri9asqo8k01q.apps.googleusercontent.com";

const client = new OAuth2Client(CLIENT_ID);
async function verify() {
  const ticket = await client.verifyIdToken({
    idToken: process.argv[2],
    audience: CLIENT_ID
  });
  const payload = ticket.getPayload();
  const userid = payload["sub"];

  console.log(payload);
  console.log(userid);
}

verify().catch(console.error);

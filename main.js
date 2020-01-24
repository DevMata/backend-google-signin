const { OAuth2Client } = require("google-auth-library");

const CLIENT_ID = "YOUR CLIENT_ID";

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

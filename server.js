const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const { OAuth2Client } = require('google-auth-library');

dotenv.config();
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

const app = express();
app.use(express.json());

const users = [];

function upsert(array, item) {
  const i = array.findIndex((_item) => _item.email === item.email);
  if (i > -1) array[i] = item;
  else array.push(item);
}

app.post('/api/energy-live', async (req, res) => {
  console.log("POST");
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  console.log(ticket);
  const { name, email, picture, exp } = ticket.getPayload();
  upsert(users, { name, email, picture, exp });
  res.status(201);
  res.json({ name, email, picture, exp });
});

app.use(express.static(path.join(__dirname, '/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/build/index.html'))
);

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Server is ready at http://localhost:${process.env.PORT || 5000}`
  );
});
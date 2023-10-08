// spotify.js

const SpotifyWebApi = require('spotify-web-api-node');
const express = require('express');

const spotifyApi = new SpotifyWebApi({
  clientId: 'e090939860f2415b9aa484e0e78649b2',
  clientSecret: 'f597fb14856a48b99e0316342fc7a7be',
  redirectUri: 'http://localhost:3000/callback'
});

const app = express();

app.get('/callback', (req, res) => {
  const { code } = req.query;

  spotifyApi.authorizationCodeGrant(code).then(
    data => {
      spotifyApi.setAccessToken(data.body['access_token']);
      spotifyApi.setRefreshToken(data.body['refresh_token']);
      res.redirect('http://localhost:3000/');
    },
    err => {
      res.status(err.statusCode || 500).send(err.message);
    }
  );
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

module.exports = spotifyApi;

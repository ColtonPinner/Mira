// server.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/api/status', (req, res) => {
  // Here you would typically fetch the status from your dashboard application
  // For this example, we'll just send a static response
  res.json({ status: 'Online' });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
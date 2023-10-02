const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/my_database', { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Create web server
// Create API endpoint
// Create a route
// Create a function that returns comments
// Use the function in the route
// Listen to the server on the port

const express = require('express');
const comments = require('./comments');

const app = express();
const port = 4001;

app.get('/comments', (req, res) => {
  res.send(comments.getComments());
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
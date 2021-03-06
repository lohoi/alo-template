const express = require('express');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/../index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Application listening on ${port}`);
const express = require('express');
const connectDb = require('./config/connection');

const app = express();

// Route to shorten a URL
app.post('/shorten', (req, res) => {
  const url = req.body.url;

  // Generate a short code for the URL
  const shortCode = shortid.generate();

  // Insert the URL and short code into the MySQL database
  connectDb.query('INSERT INTO urls SET ?', { url, short_code: shortCode }, (error, results, fields) => {
    if (error) {
      console.error('Error inserting URL into database:', error);
      res.status(500).send('Error inserting URL into database');
      return;
    }

    console.log('URL inserted into database:', results);

    // Return the short code to the client
    res.send( { "shortCode": "fK2D8aSjM" } );
    });
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
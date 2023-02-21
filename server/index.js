const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const connectDb = require('./config/connection');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Endpoint to shorten a URL
app.post('/shorten', (req, res) => {
    console.log(req.body.url);
    const longUrl = req.body.url;

    // Generate a short code for the URL
    const shortCode = Math.random().toString(36).substring(7);
    console.log(shortCode);

    const sql = 'INSERT INTO urls (long_url, short_code) VALUES (?, ?)';

    // Insert the URL and short code into the MySQL database
    connectDb.query(sql, [longUrl, shortCode], (error, result) => {
        if (error) {
            console.error('Error inserting URL into database:', error);
            res.status(500).send('Error inserting URL into database');
            return;
        } else {
            console.log('URL inserted into database:', result);
            // Return the short code to the client
            res.send( { "shortUrl": `cutlink.com/${shortCode}`, 'shortCode': shortCode } );
        }
    });
});

// Endpoint to retrieve a URL
app.get('/:shortCode', (req, res) => {

    const shortCode = req.params.shortCode;
  
    const sql = 'SELECT long_url FROM urls WHERE short_code = ?';

    connectDb.query(sql, [shortCode], (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).send('Server Error');
      } else if (result.length === 0) {
        res.status(404).send('URL Not Found');
      } else {
        console.log(result);
        // res.redirect(result[0].long_url);
        res.send( { "longUrl": result[0].long_url } )
      }
    });
  });
  

app.listen(5000, () => {
    console.log('App listening on port 5000');
});
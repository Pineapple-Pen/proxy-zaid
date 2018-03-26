require('newrelic');
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").load();

//const morgan = require('morgan');

// var router = require("./routes/routes.js");
const app = express();
const port = process.env.PORT || 3000;
const hostPhotos = process.env.HOST_PHOTOS || 'localhost';
const hostOverview = process.env.HOST_OVERVIEW || 'localhost';
const hostSidebar = process.env.HOST_SIDEBAR || 'localhost';
const hostRecommendations = process.env.HOST_RECOMMENDATIONS || 'localhost';

//app.use(morgan('tiny'));

app.use('/restaurants/:id', express.static('public'));

app.get('/', (req, res) => {
  res.redirect(`http://${hostPhotos}:${port}/restaurants/${Math.floor(Math.random()*10000000)}`);
});

app.get('/api/restaurants/:id/gallery', (req, res) => {
  res.redirect(`http://${hostPhotos}:3002/api/restaurants/${req.params.id}/gallery`)
});

app.get('/api/restaurants/:id/overview', (req, res) => {
  res.redirect(`http://${hostOverview}:3001/api/restaurants/${req.params.id}/overview`)
});

app.get('/api/restaurants/:id/sidebar', (req, res) => {
  res.redirect(`http://${hostSidebar}:3003/api/restaurants/${req.params.id}/sidebar`)
});

app.get('/api/restaurants/:id/recommendations', (req, res) => {
  res.redirect(`http://${hostRecommendations}:3004/api/restaurants/${req.params.id}/recommendations`)
});


app.listen(port, () => {
  console.log(`server running at: http://${hostPhotos}:${port}`);
});

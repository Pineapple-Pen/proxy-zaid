const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");
// var router = require("./routes/routes.js");
const app = express();
const port = process.env.PORT || 3001;
const host = process.env.HOST || 'localhost';


app.use('/restaurants/:id', express.static('../public'));

app.get('/', (req, res) => {
  res.redirect(`http://${host}:${port}/restaurants/${Math.floor(Math.random()*10000000)}`);
});

app.get('/api/restaurants/:id/gallery', (req, res) => {
  res.redirect(`http://${host}:3002/api/restaurants/${req.params.id}/gallery`)
});

app.get('/api/restaurants/:id/overview', (req, res) => {
  res.redirect(`http://${host}:3002/api/restaurants/${req.params.id}/overview`)
});

app.get('/api/restaurants/:id/sidebar', (req, res) => {
  res.redirect(`http://${host}:3003/api/restaurants/${req.params.id}/sidebar`)
});

app.get('/api/restaurants/:id/recommendations', (req, res) => {
  res.redirect(`http://${host}:3004/api/restaurants/${req.params.id}/recommendations`)
});


app.listen(port, () => {
  console.log(`server running at: http://${host}:${port}`);
});

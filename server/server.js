require('newrelic');
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").load();

if (typeof(window) === 'undefined') {
  global.window = new Object();
}

const morgan = require('morgan');

// var router = require("./routes/routes.js");
const app = express();
const host = 'localhost'
const port = process.env.PORT || 3000;
const hostPhotos = process.env.HOST_PHOTOS || 'localhost';
const hostOverview = process.env.HOST_OVERVIEW || 'localhost';
const hostSidebar = process.env.HOST_SIDEBAR || 'localhost';
const hostRecommendations = process.env.HOST_RECOMMENDATIONS || 'localhost';

app.use(morgan('tiny'));

//Redirect Root to a random restaurant ID
app.get('/', (req, res) => {
  res.redirect(`http://${hostPhotos}:${port}/restaurants/${Math.floor(Math.random()*10000000)}`);
});

app.use(express.static('public'));  //Capture static files (index.html, CSS, etc)

const clientBundles = './public/services';
const serverBundles = './templates/services';
const serviceConfig = require('../service-config.js');
const services = require('../loader.js')(clientBundles, serverBundles, serviceConfig);

const React = require('react');
const ReactDom = require('react-dom/server');
const Layout = require('../templates/layout');
const App = require('../templates/app');
const Scripts = require('../templates/scripts');

// see: https://medium.com/styled-components/the-simple-guide-to-server-side-rendering-react-with-styled-components-d31c6b2b8fbf
const renderComponents = (components, props = {}) => {
  return Object.keys(components).map(item => {
    let component = React.createElement(components[item], props);
    return ReactDom.renderToString(component);
  });
}


app.get('/restaurants/:id', function(req, res){
  let components = renderComponents(services, {id:req.params.id});
  res.end(Layout(
    'Pen Apple PineApple Pen',
    App(...components),
    Scripts(Object.keys(services))
  ));
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
  console.log(`server running at: http://${host}:${port}`);
});



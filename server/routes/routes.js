const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("api/restaurant/:id/gallery", function(req, res) {
  axios
    .get(`http://localhost:3001/api/restaurant/${id}/gallery`)
    .then(results => res.send(results.data))
    .catch(err => {
      console.log(err);
      res.writeHead(404);
      res.end(JSON.stringify(err));
    });
});

router.get("api/restaurant/:id/overview", function(req, res) {
  let id = req.query;
  console.log("REQUEST ID: ", id);
  axios
    .get(`http://localhost:3002/api/restaurant/${id}/overview`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => {
      res.writeHead(404);
      res.end(JSON.stringify(err));
    });
});

router.get("api/restaurant/:id/sidebar", function(req, res) {
  axios
    .get(`http://localhost:3003/api/restaurant/${id}/sidebar`)
    .then(results => res.send(results.data))
    .catch(err => {
      res.writeHead(404);
      res.end(JSON.stringify(err));
    });
});

router.get("api/restaurant/:id/recommendations", function(req, res) {
  axios
    .get(`http://localhost:3004/api/restaurant/${id}/recommendations`)
    .then(results => res.send(results.data))
    .catch(err => {
      res.writeHead(404);
      res.end(JSON.stringify(err));
    });
});

module.exports = router;

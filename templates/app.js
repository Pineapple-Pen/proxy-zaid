module.exports = (Photos, Nearby, related, reviews) => `
  <div id="gallery-app">${Photos}</div>
  <div id="Recommendations">${Nearby}</div>
  <div id="Related">${related}</div>
  <div id="Reviews">${reviews}</div>
`;

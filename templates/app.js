module.exports = (Photos, Recommendations,  Sidebar, Overview) => `
  <div id="Photos">${Photos}</div>
  <div id="overview-sidebar">
    <div id="overview">${Overview}</div>
    <div id="Sidebar">${Sidebar}</div>
  </div>
  <div id="Recommendations">${Recommendations}</div>
`;

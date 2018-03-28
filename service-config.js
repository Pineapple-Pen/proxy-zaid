require('dotenv').load();

module.exports = { 
 // "Overview": `http://${process.env.HOST_RECOMMENDATIONS}:${process.env.PORT_RECOMMENDATIONS}/bundle`,
  "Photos": `http://${process.env.HOST_PHOTOS}:${process.env.PORT_PHOTOS}/bundle`,
 // "Sidebar": `http://${process.env.HOST_RECOMMENDATIONS}:${process.env.PORT_RECOMMENDATIONS}/bundle`,
  "Nearby": `http://${process.env.HOST_RECOMMENDATIONS}:${process.env.PORT_RECOMMENDATIONS}/bundle`
}
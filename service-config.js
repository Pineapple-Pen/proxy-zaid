require('dotenv').load();

module.exports = { 
   "Photos": `http://${process.env.HOST_PHOTOS}:${process.env.PORT_PHOTOS}/bundle`,
   "Recommendations": `http://${process.env.HOST_RECOMMENDATIONS}:${process.env.PORT_RECOMMENDATIONS}/bundle`,
   "Overview": `http://${process.env.HOST_OVERVIEW}:${process.env.PORT_OVERVIEW}/bundle`,
   "Sidebar": `http://${process.env.HOST_SIDEBAR}:${process.env.PORT_SIDEBAR}/bundle`,
}
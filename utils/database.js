const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("booking-appointment", "root", "F@khan1995", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;

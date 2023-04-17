// archivo config/database.js
require('dotenv/config');

const {
    DB_HOST,
    DB_USER,
    DB_PASS,
    DB_NAME
} = process.env;

const { Sequelize } = require('sequelize');

const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

const models = {
  Sequelize: Sequelize,
  sequelize: db,
  productos: require("../models/producto"),
}

models.sequelize.sync({ force: true })
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
});

module.exports = db;

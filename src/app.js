const express = require('express');
// const morgan = require('morgan');
const cors = require('cors');

const productos = require('./routes/productos');

// const { httpLogStream } = require('./utils/logger');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(morgan('dev'));
// app.use(morgan('combined', { stream: httpLogStream }));
app.use(cors());

//ROUTES
app.use('/', productos);


app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        status: "error",
        message: err.message
    });
    next();
});

//SEQUELIZE
/* const db = require("./models/producto");
db.sequelize.sync({ force: true })
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
}); */

module.exports = app;
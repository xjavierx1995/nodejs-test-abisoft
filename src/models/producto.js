// archivo models/producto.js

const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Producto = db.define('producto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  oferta: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

module.exports = Producto;

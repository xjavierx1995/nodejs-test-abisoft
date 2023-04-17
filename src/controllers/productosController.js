// archivo controllers/productosController.js

const Producto = require('../models/producto');

// Obtener todos los productos
exports.getProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error del servidor');
  }
};

// Obtener un producto por ID
exports.getProductoById = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error del servidor');
  }
};

// Crear un nuevo producto
exports.createProducto = async (req, res) => {
  try {
    const producto = await Producto.create(req.body);
    res.json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error del servidor');
  }
};

// Actualizar un producto por ID
exports.updateProducto = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    await producto.update(req.body);
    res.json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error del servidor');
  }
};

// Eliminar un producto por ID
exports.deleteProducto = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    await producto.destroy();
    res.json({ mensaje: 'Producto eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error del servidor');
  }
};

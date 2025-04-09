const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, nombre: 'Producto X', precio: 20 },
    { id: 2, nombre: 'Producto Y', precio: 35 }
  ]);
});

module.exports = router;

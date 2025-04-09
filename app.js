const express = require('express');
const app = express();
const path = require('path');

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
const clientesRouter = require('./routes/clientes');
const productosRouter = require('./routes/productos');

app.use('/clientes', clientesRouter);
app.use('/productos', productosRouter);

// Iniciar servidor
const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

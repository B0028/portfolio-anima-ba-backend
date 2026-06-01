import productos from './models/productosModel.js';

export const getFicha1productos = (req, res) => {
    res.json(productos)
}

export const getProductoPorId = (req, res) => {
    const idBuscar = parseInt(req.params.id); 
    const producto = productos.find(p => p.id === idBuscar);

    if (producto) {
        return res.json(producto);
    } else {
        return res.status(404).json({
            error: {
                status: 404,
                type: "ResourceNotFound",
                message: "No se encontró el producto en la base de datos."
            }
        });
    }
};


export const getFicha1 = (req, res) => {
    res.send(`
    <script>
    </script>
    <head>
        <title>Panel de Control de la API</title>
        <style>
          body { font-family: sans-serif; max-width: 600px; margin: 40px auto; padding: 20px; line-height: 1.6; background-color: #16171d; }
          p { color: #f3f4f6; }
          h1 { color: #f3f4f6; border-bottom: 2px solid #eee; }
          h2 { color: #c084fc; margin-top: 20px; }
          h3 { color: #c084fc; margin-top: 20px; }
          ul { color: #f3f4f6; padding-left: 20px; }
          a { color: #c084fc; text-decoration: none; font-weight: bold; }
          a:hover { text-decoration: underline; }
          code { color: #289f9dff; font-size: 1rem; }
        </style>
    </head>
    <body>
      <h2>Productos</h2>
      <ul>
          <li><button><a href="/api/desarrollo-practico/ficha-01/productos">Ver lista completa de produtos</a></button></li>
          <li><button><a href="/api/desarrollo-practico/ficha-01/productos/1">Producto 1</a></button></li>
          <li><button><a href="/api/desarrollo-practico/ficha-01/productos/2">Producto 2</a></button></li>
          <li><button><a href="/api/desarrollo-practico/ficha-01/productos/3">Producto 3</a></button></li>
          <li><button><a href="/api/desarrollo-practico/ficha-01/productos/4">Producto 4</a></button></li>
          <li><button><a href="/api/desarrollo-practico/ficha-01/productos/5">Producto 5</a></button></li>
      </ul>
      <a href="/" style="color: #c084fc;">Volver al menú</a>
    </body>
  `);
};

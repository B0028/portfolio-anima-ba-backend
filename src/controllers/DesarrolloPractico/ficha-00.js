// 1
const productos = [
    { id: 1, nombre: "Mouse" },
    { id: 2, nombre: "Teclado" },
    { id: 3, nombre: "Monitor" },
    { id: 4,nombre: "SSD" },
];

// 2
function listarProductos() {
    console.table(productos)
};

// 3
function agregarProducto(nombre) {
    productos.push({
        id: productos.length + 1,
        nombre: nombre
    });
    console.log(`Producto "${nombre}" agregado. Ejecuta listarProductos() para ver el cambio.`);
};

// 4
function buscarProducto(id) {
const encontrado = productos.find(producto => producto.id === id);
    console.log(encontrado ? encontrado : `No se encontró el ID ${id}`);
    return encontrado;
}

// 5 
function modificarProducto(id, nuevoNombre) {
    const producto = productos.find(producto => producto.id === id);
    if (producto) {
        producto.nombre = nuevoNombre;
        console.log(`📝 Producto ${id} modificado a "${nuevoNombre}".`);
    } else {
        console.log(`❌ No se encontró el ID ${id}`);
    }
}

export const getFicha1 = (req, res) => {
    res.send(`
    <script>
      window.productos = ${JSON.stringify(productos)};
      window.listarProductos = ${listarProductos.toString()};
      window.agregarProducto = ${agregarProducto.toString()};
      window.buscarProducto = ${buscarProducto.toString()};
      window.modificarProducto = ${modificarProducto.toString()};
      console.log("Abre la consola y ejecuta cualquiera de estos comandos:");
      console.log("listarProductos()");
      console.log("agregarProducto('Tu Producto')");
      console.log("buscarProducto(1)");
      console.log("modificarProducto(1, 'Nuevo Nombre')");
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
      <h2>Ejercicio cargado en la Consola</h2>
      <p>Presiona <b>F12</b> para interactuar.</p>
      <h2>Desarrollo Teorico</h2>
      <ul>
          <li>Listar todos los productos con el comando: <code>productos</code></li>
          <li>Agregar un nuevo producto al listado: <code>agregarProducto('Tu Producto')</code></li>
          <li>Buscar un producto mediante su ID: <code>buscarProducto(1)</code></li>
          <li>Modificar el nombre de un ítem existente: <code>modificarProducto(1, 'Nuevo Nombre')</code></li>
      </ul>  
      <a href="/" style="color: #c084fc;">Volver al menú</a>
    </body>
  `);
};
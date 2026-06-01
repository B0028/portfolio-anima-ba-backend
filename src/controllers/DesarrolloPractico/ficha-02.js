import productos from './models/productosModel.js';

export const agregarProducto = (req, res) => {
    if (!req.body.nombre) {
        return res.status(400).json({ 
            error: "Falta el nombre del producto" 
        });
    }
    
    const nuevoProducto = {
        id: productos.length + 1,
        nombre: req.body.nombre
    };
    
    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
};

export const modificarProducto = (req, res) => {
    const id = parseInt(req.params.id);
    const nuevoNombre = req.body.nombre;

    if (!nuevoNombre) {
        return res.status(400).json({ error: "Falta el nombre del producto" });
    }

    const index = productos.findIndex(producto => producto.id === id);
    if (index === -1) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }

    productos[index].nombre = nuevoNombre;
    res.json(productos[index]);
};

export const eliminarProducto = (req, res) => {
    const id = parseInt(req.params.id);
    const index = productos.findIndex(producto => producto.id === id);
    
    if (index === -1) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }

    const [productoEliminado] = productos.splice(index, 1);
    res.json(productoEliminado);
};


export const getFicha2 = (req, res) => {
    res.json(productos)

};

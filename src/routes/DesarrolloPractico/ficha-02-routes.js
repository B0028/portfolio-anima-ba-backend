import { Router } from 'express';
import { 
    getFicha2,
    agregarProducto, 
    modificarProducto, 
    eliminarProducto 
} from '../../controllers/DesarrolloPractico/ficha-02.js';

const router = Router();

router.get('/ficha-02', getFicha2)
router.post('/ficha-02/productos', agregarProducto);
router.put('/ficha-02/productos/:id', modificarProducto);
router.delete('/ficha-02/productos/:id', eliminarProducto);

export default router;

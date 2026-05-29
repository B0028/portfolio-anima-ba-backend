import { Router } from 'express'
import { getFicha1, getFicha1productos, getProductoPorId } from '../../controllers/DesarrolloPractico/ficha-01.js'

const router = Router()

router.get('/ficha-01', getFicha1)
router.get('/ficha-01/productos', getFicha1productos)
router.get('/ficha-01/productos/:id', getProductoPorId);

export default router

// backend/routes/cardRoutes.js
import { Router } from 'express'
import { getFicha1 } from '../../controllers/DesarrolloPractico/ficha-00.js'

const router = Router()

router.get('/ficha-00', getFicha1)

export default router
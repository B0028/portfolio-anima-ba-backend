// backend/routes/cardRoutes.js
import { Router } from 'express'
import { getEjercicio1 } from '../../controllers/DesarrolloTeorico/ejercicio-01.js'

const router = Router()

router.get('/ejercicio-01', getEjercicio1)

export default router
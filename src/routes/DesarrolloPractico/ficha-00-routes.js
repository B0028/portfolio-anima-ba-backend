import { Router } from 'express'
import { getFicha0 } from '../../controllers/DesarrolloPractico/ficha-00.js'

const router = Router()

router.get('/ficha-00', getFicha0)

export default router
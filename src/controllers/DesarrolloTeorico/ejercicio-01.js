// backend/controllers/cardController.js
const cardData = {
    imagen: null,
    cita: 'El que sueña sin lucha no llega. El que lucha sin soñar no sirve',
    autor: 'Anónimo'
}
export const getEjercicio1 = (req, res) => {
    res.json(cardData)
}
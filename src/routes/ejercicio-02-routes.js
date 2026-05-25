
const secciones = [
    { id: 'about', label: 'Sobre Mí' },
    { id: 'interest', label: 'Intereses' },
    { id: 'share', label: 'Compartir' },
    { id: 'portfolio',label: 'Portfolio' },
]

app.get('/api/secciones', (req, res) => {
res.json(secciones)
})



app.listen(5000, () => {
console.log('Servidor corriendo en http://localhost:5000')
})



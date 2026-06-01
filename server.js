
import app from './app.js';

/*
app.listen(5000, () => {
    console.log('Servidor corriendo en http://localhost:5000')
})
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

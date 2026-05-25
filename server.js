import express from 'express'
import cors from 'cors'
import ejercicio01 from './src/routes/DesarrolloTeorico/ejercicio-01-routes.js'
import ficha00 from './src/routes/DesarrolloPractico/ficha-00-routes.js'

const app = express()

app.use(cors()) // permite que React le hable desde otro puerto
app.use(express.json()) // entiende JSON en los pedidos


app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Portfolio BE Bruno Accorenti </title>
        <style>
          body { font-family: sans-serif; max-width: 600px; margin: 40px auto; padding: 20px; line-height: 1.6; background-color: #16171d; }
          p { color: #f3f4f6; }
          h1 { color: #f3f4f6; border-bottom: 2px solid #eee; }
          h2 { color: #c084fc; margin-top: 20px; }
          h3 { color: #c084fc; margin-top: 20px; }
          ul { color: #f3f4f6; padding-left: 20px; }
          a { color: #c084fc; text-decoration: none; font-weight: bold; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <h1>Portfolio Ejercicios Backend (2026) <br> Bruno Accorenti </h1>
        <p>Haz clic en cualquier endpoint praa probar la respuesta del servidor:</p>
    
        
        <h2>Desarrollo Teorico</h2>
        <ul>
          <li><a href="/api/desarrollo-teorico/ejercicio-01" target="_blank">Ejercicio-01</a></li>
        </ul>

        <h2>Desarrollo Practico</h2>
        <ul>
          <li><a href="/api/desarrollo-practico/ficha-00" target="_blank">Ficha-00</a></li>
        </ul>
      </body>
    </html>
  `);
});

app.use('/api/desarrollo-teorico', ejercicio01);
app.use('/api/desarrollo-practico', ficha00);

/*
app.listen(5000, () => {
    console.log('Servidor corriendo en http://localhost:5000')
})
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
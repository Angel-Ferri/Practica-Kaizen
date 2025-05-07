const express = require('express');
const port = 5000;
const cors = require('cors');
const app = express();

//Router
const tareasrouter = require('./routes/tareas');

// middleware para procesar json
app.use(express.json());
app.use(cors());

//Correr app
app.use(express.json());
app.use('/tareas',tareasrouter);


app.get('/',(req, res) =>{
    res.send('api de tareas con espress');
})

//iniciar el servidor
app.listen(port, ()=> {
    console.log(`Servidor escuchado en http:localhost:${port}`);
});
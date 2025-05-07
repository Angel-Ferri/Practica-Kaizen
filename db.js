const sqlite3 = require('sqlite3').verbose();


// Ruta a la db
const ruta = __dirname + "/db/database.sqlite";
// Conectado a la db
const db = new sqlite3.Database(ruta,(err)=> {
    if (err) {
        console.log('error al conectar la base de datos', err.message)
    }
    else{
        console.log('conectado a la base de datos.')
    }
})
module.exports  = db;
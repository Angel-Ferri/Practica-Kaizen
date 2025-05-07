const express = require('express');
const router = express.Router();
const db = require('../db');
// obtener todas las tareas
router.get('/', (req, res) =>{
    const query = 'SELECT * FROM tareas';
    db.all(query, [], (erro,rows)=>{
        res.json({tareas:rows});
    });
});
//Guardar tarea
router.post('/', (req, res) =>{
    const {Nombre,Descripcion,Estado} = req.body;
    const query = 'INSERT INTO tareas (Nombre,Descripcion,Estado) VALUES(?,?,?)';
    //const {} = req.body;
    
    db.run(query, [Nombre,Descripcion,Estado],function(err){
        res.json({
            id: this.lastID,
            err:err
        });
    })
    });

    // Actualizar tarea
    router.put('/:id', (req, res)=>{
        const { id } = req.params;
        const {Nombre,Descripcion,Estado} = req.body 
        // Resto de la solicitud
        const query = `UPDATE 'tareas' SET Nombre = ? Descripcion = ? , Estado = ? WHERE id = ?`
        db.run(query, [Nombre,Descripcion,Estado, id],function(err){
            
            res.json({
                
            })})
    })
module.exports = router
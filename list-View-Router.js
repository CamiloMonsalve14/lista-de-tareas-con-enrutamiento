const express = require("express");
const listViewRouter = express.Router();
const funcionTareas = require("./listaTareas");


listViewRouter.get("/", (req, res) => {
res.json(funcionTareas.imprimirTareasCompletadas());
});

// Middleware para validar parámetros en list-view-router
listViewRouter.use((req, res, next) => {
    const id = req.params.id;
    // Verifica si el parámetro id es válido (por ejemplo, si es un número)
    if (isNaN(id)) {
    return res.status(400).json({ error: 'Parámetro no válido' });
    }
    next();
});

listViewRouter.get("/buscar/:id" , (req, res) =>{
const id = parseInt(req.params.id)
res.json(funcionTareas.buscarTareaPorId(id)) 
})


listViewRouter.get("/completadas", (req, res) => {
res.json(funcionTareas.verListaDetareasCompletadas());
});

listViewRouter.get("/incompletas", (req, res) => {
res.json(funcionTareas.verListaDetareasIncompletadas());
});



module.exports = listViewRouter;
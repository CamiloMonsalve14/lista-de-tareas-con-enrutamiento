const express = require("express");
const listViewRouter = express.Router();
const funcionTareas = require("./listaTareas");


listViewRouter.get("/", (req, res) => {
res.json(funcionTareas.imprimirTareasCompletadas());
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
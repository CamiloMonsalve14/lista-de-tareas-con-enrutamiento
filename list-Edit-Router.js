const express = require("express");
const listEditRouter = express.Router();
const funcionTareasEditar = require("./listaTareas");

listEditRouter.post("/agregar", (req, res) => {
funcionTareasEditar.agregarTarea(req.body);
res.json({
    status: 200,
    message: "La tarea ha sido creada",
    data: req.body,
});
});

listEditRouter.delete("/borrar/:id", (req, res) => {
const id = parseInt(req.params.id);
const tareaExistente = funcionTareasEditar.buscarTareaPorId(id);
if (!tareaExistente) {
    res.status(404).json({
    status: 404,
    message: `No puedes borrar la tarea con id ${id} porque no existe`,
    });
} else {
    funcionTareasEditar.eliminarTarea(id);
    res.json({
    message: `la tarea con id ${id} ha sido eliminada`,
    });
}
});

listEditRouter.put("/actualizar/:id", (req, res) => {
const id = parseInt(req.params.id);
const siExisteTarea = funcionTareasEditar.buscarTareaPorId(id);
if (!siExisteTarea) {
    res.status(404).json({
    status: 404,
    message: `No se encontro la tarea con ID ${id}, intenta nuevamente`,
    });
} else {
    funcionTareasEditar.actualizarTarea(id, req.body);
    res.json({
    status: 200,
    message: `la tarea con id ${req.params.id} fue editada exitosamente`,
    });
}
});

module.exports = listEditRouter;
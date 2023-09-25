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

// Middleware para validar solicitudes POST y PUT en list-edit-router
listEditRouter.use((req, res, next) => {
    if ((req.method === 'POST' || req.method === 'PUT') && !req.body) {
    return res.status(400).json({ error: 'Cuerpo de solicitud vacío' });
    }

    // Verifica si la solicitud POST tiene información válida
    if (req.method === 'POST' && (!req.body.nombre || !req.body.descripcion)) {
    return res.status(400).json({ error: 'Información no válida o atributos faltantes para crear tareas' });
    }

    // Verifica si la solicitud PUT tiene información válida
    if (req.method === 'PUT' && (!req.body.nombre || !req.body.descripcion)) {
    return res.status(400).json({ error: 'Información no válida o atributos faltantes para actualizar tareas' });
    }

    next();
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
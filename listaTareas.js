let listaTareas = [
    { id: 1, descripcion: "Hacer el mercado", completada: false },
    { id: 2, descripcion: "Pagar los servivios", completada: false },
    { id: 3, descripcion: "Surtir local", completada: false },
    { id: 4, descripcion: "Pagar materiales del local", completada: false },
    { id: 5, descripcion: "Mantenimiento camara", completada: false },
];

function agregarTarea(nuevaTarea) {
    listaTareas.push(nuevaTarea);
}

function verListaDetareasCompletadas() {
    const completadas = listaTareas.filter((tarea) => tarea.completada === true);
    if (completadas.length === 0) {
    return `No hay tareas completadas`;
    }
    const resultado = completadas.map(
    (tarea) =>
        `tarea completada: ID ${tarea.id} y su Descripcion ${tarea.descripcion}`
    );
    return resultado;
}

function verListaDetareasIncompletadas() {
    const incompletas = listaTareas.filter((tarea) => tarea.completada === false);
    if (incompletas.length === 0) {
    return `Todas las tareas están completas`;
    }
    const resultado = incompletas.map(
    (tarea) =>
        `Tarea incompleta: ID ${tarea.id} y su Descripcion ${tarea.descripcion}`
    );
    return resultado
}

function eliminarTarea(tareaId) {
    let nuevasTareas = listaTareas.filter((tarea) => tarea.id !== tareaId);
    listaTareas = nuevasTareas;
}

function actualizarTarea(id, nuevaTarea) {
    const index = listaTareas.findIndex((listaTareas) => listaTareas.id === id);
    if (index !== -1) {
    listaTareas[index] = { ...listaTareas[index], ...nuevaTarea };
    return `Tarea actualizada: ${listaTareas[index]}`;
    } else {
    return `No se encontro la tarea con id: ${id}`;
    }
}

function buscarTareaPorId(id) {
    const tareaBuscada = listaTareas.find((tarea) => tarea.id === id);
    if (!tareaBuscada) {
        return  `La tarea buscada con Id ${id} no existe`
    }
    return tareaBuscada
}

function imprimirTareasCompletadas() {
    return listaTareas;
}

module.exports = {
verListaDetareasCompletadas, verListaDetareasIncompletadas, agregarTarea, eliminarTarea, actualizarTarea,imprimirTareasCompletadas, buscarTareaPorId,}
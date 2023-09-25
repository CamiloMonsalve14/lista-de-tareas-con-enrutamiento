const express = require("express");
const app = express();
const port = 4000;
const listViewRouter = require("./list-View-Router");
const listEditRouter = require("./list-Edit-Router");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bienvenido a la aplicacion de Lista de Tareas");
    });

// Middleware para gestionar métodos HTTP válidos en todo el servidor
app.use((req, res, next) => {
    const metodosValidos = ['GET', 'POST', 'PUT', 'DELETE']; // Métodos HTTP válidos

    if (!metodosValidos.includes(req.method)) {
    return res.status(400).json({ error: 'Método HTTP no válido' });
    }

    next();
});


app.use("/listadetareas", listViewRouter);
app.use("/editartareas", listEditRouter);

app.listen(port, () => {
console.log(`el servidor inicio correctamente en el port ${port}`);
});
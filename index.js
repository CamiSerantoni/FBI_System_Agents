import express from "express";
import "dotenv/config";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { results } from "./data/agentes.js";
import jwt from "jsonwebtoken";
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const app = express();
const { PORT } = process.env;
const { secret } = process.env


app.use(express.static("public"));

// RUTA GET PARA LEER HTML
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// RUTA GET PARA LEER JSON
app.get("/SignIn", (req, res) => {
    const { email, password } = req.query;
    const agente = results.find((agente) => agente.email === email && agente.password === password);


    if (agente) {
        //si existe agente se crea el token con tiempo de expiración y datos del agente encriptados
        const token = jwt.sign({ agente }, secret, { expiresIn: "2m" });
        res.send(`<h4>
            <a href="/sitioSecretoParaAgente?token=${token}" title ="Bienvenido al sistema del FBI Sr/a: agente">Puede ingresar al sistema ${agente.email}</a> </h4>
            <script>sessionStorage.setItem('token', '${token}')</script>`);
    } else {
        res.status(401).json({ message: "Credenciales incorrectas" });
    }

});

//RUTA PARA ENTRAR A SITIO SECRETO DE AGENTE
app.get("/sitioSecretoParaAgente", (req, res) => {
    const { token } = req.query

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            res.status(401).send({ message: "Token inválido", error: err.message });
        } else {

            res.send(`<h1>Bienvenido al sitio secreto del FBI Sr/a agente: ${decoded.agente.email}</h1>`)

        }
    });



})



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.get("*", (req, res) => {
    res.send("La ruta no existe");
});


import express from 'express';
import { CadastrarCliente } from './controller/Cliente.js';
import { Login } from './controller/LoginBackend.js';
import { CadastrarConsultor } from './controller/Consultor.js';

const app = express();

app.use((req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");// dentro do '*' poderia ser qual site poderia fazer a requisiçao.

    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");

    next();

})

app.use(express.json()); // exp interpreta txt por padrão, aux p/ o body ser lido

//ENDPOINTS
app.post('/clientes/login', Login);
app.post('/clientes/cadCliente', CadastrarCliente);
app.post('/clientes/cadConsultor', CadastrarConsultor);

//BASTIDORES

app.get('/ping', (request,response,next) => {
    response.send({
        message: "pong"
    });
});

app.listen(8000, () => {
    console.log("Rodando na porta 8000...");
});
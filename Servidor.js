const express = require('express');
const fs = require('fs');
const app = express();

/* Porta do servidor. */
const PORTA = process.env.PORT || 3000;

app.use(express.json());

/* Função para carregar rotas automaticamente. */
function aplicarRota(rota) {
    return app.use("/", require(`./rotas/${rota.toLowerCase()}`));
}

fs.readdirSync("./Rotas").map(aplicarRota)

/* Função para iniciar o servidor. */
function iniciarServidor() {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
}

/* Inicia o servidor. */
app.listen(PORTA, iniciarServidor);

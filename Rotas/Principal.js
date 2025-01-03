const path = require('path');
const express = require('express');
const roteador = express.Router();

const DIRETORIO = '';

function atribuirHtml(nome) {
    return path.join(process.cwd(), 'Publico', DIRETORIO + nome)
}

roteador.get('/', (req, res) => {
    res.sendFile(atribuirHtml('principal.html'));
});

roteador.post('/', (req, res) => {
    res.status(201).json({ mensagem: 'Item criado com sucesso!' });
});

module.exports = roteador;

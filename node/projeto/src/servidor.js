const porta = 3003;
const bancoDeDados = require("./bancoDeDados.js");
const bodyParser = require("body-parser");

const express = require("express");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/produtos", (req, res, next) => {
    res.send(bancoDeDados.getProdutos()); //vai coverter para JSON
});

app.get("/produtos/:id", (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id));//vai coverter para JSON
});

app.post("/produtos", (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto); //vai coverter para JSON
});

app.put("/produtos/:id", (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto); //vai coverter para JSON
});

app.delete("/produtos/:id", (req, res, next) => {
    const produto = bancoDeDados.excluirProdutos(req.params.id);
    res.send(produto); //vai coverter para JSON
});

app.listen(porta, _ => {
    console.log(`Servidor executando na porta ${porta}.`);
});
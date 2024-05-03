import express from 'express';
import path from 'path';

import Funcionario from '../poo/Funcionario.js';
import Pessoa from '../poo/Pessoa.js';

const router = express.Router();

router.use(express.json());

router.get('/pessoa', (req, res) => {
    //res.sendFile(path.join(__dirname, 'index.html'));
    //res.render('index');
});

router.get('/funcionario', (req, res) => {

});

router.post('/pessoa', (req, res) => {
    const { name, age, cpf } = req.body;
    const novaPessoa = new Pessoa(name, age, cpf);

    res.send(novaPessoa);
});

router.post('/funcionario', (req, res) => {
    const { name, age, cpf, position, salary } = req.body;
    const novoFuncionario = new Funcionario(name, age, cpf, position, salary);

    res.send(novoFuncionario);
});


export default router;
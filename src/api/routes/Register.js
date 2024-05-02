import express from 'express';
import Funcionario from '../poo/Funcionario.js';

const router = express.Router();

router.use(express.json());

router.post('/funcionario', (req, res) => {
    const { name, age, cpf, position, salary } = req.body;
    const novoFuncionario = new Funcionario(name, age, cpf, position, salary);

    res.send(novoFuncionario);
});

export default router;
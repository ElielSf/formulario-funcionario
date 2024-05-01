import express from 'express';
import cors from 'cors';
import Funcionario from '../../poo/Funcionario.js'

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Servidor backend rodando blz");
});

app.post('/cadastrarFuncionario', (req, res) => {
    const { name, age, cpf, position, salary } = req.body;
    const novoFuncionario = new Funcionario(name, age, cpf, position, salary);
    res.send(novoFuncionario);
});

try {
    app.listen(port, () => {
        console.log(`Servidor rodando em: https://localhost:${port}`);
    });
} catch (err) {
    console.error(err);
}
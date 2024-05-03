import express from 'express';
import cors from 'cors';
import registerRoute from './src/routes/Register.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/cadastrar', registerRoute);

app.get('/', (req, res) => {
    res.send("Servidor backend rodando blz");
});

try {
    app.listen(PORT, () => {
        console.log(`Servidor rodando em: https://localhost:${PORT}`);
    });
} catch (err) {
    console.error(err);
};
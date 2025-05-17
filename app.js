require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const clientesRoutes = require('./routes/clientes');
const produtosRoutes = require('./routes/produtos');

const app = express();

//Adicionar um item ao cache com a chave 'chave' e o valor 'valor

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// 📌 Usar as rotas
app.use('/clientes', clientesRoutes);
app.use('/produtos', produtosRoutes);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.get('/', (req, res) => {
    res.send('🚀 API está rodando Bora pra cima !!!!!!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});

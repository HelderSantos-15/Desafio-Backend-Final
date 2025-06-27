// routes/clientesRoutes.js
const express = require('express');
const router = express.Router();
const { getClientes, addCliente, updateCliente, deleteCliente } = require('../controllers/clientesController');
const { cacheMiddleware } = require('../middlewares/cache'); // Importa o middleware de cache
const authMiddleware = require('../middlewares/authMiddleware'); // <-- ESSA LINHA É CRUCIAL

// Todas as rotas de clientes devem ser protegidas por autenticação.
// A rota GET / também deve usar o cache.
router.get('/', authMiddleware, cacheMiddleware, getClientes); // ✅ Autenticação E Cache
router.post('/', authMiddleware, addCliente);                 // ✅ Autenticação
router.put('/:id', authMiddleware, updateCliente);            // ✅ Autenticação
router.delete('/:id', authMiddleware, deleteCliente);         // ✅ Autenticação

module.exports = router;
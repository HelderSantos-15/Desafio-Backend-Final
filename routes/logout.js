const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Logout realizado com sucesso!');
});

module.exports = router;

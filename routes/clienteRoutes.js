const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");
const { cacheMiddleware } = require("../middlewares/cache");

router.get("/", cacheMiddleware, clienteController.getAll);
router.post("/", clienteController.create);
router.put("/:id",clienteController.update);
router.delete("/:id", clienteController.remove);

module.exports = router;
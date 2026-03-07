import express from "express"
import {
  criarCarro,
  listarCarros,
  buscarCarro,
  atualizarCarro,
  deletarCarro
} from "../controllers/carroController.js"

const router = express.Router()

router.post("/", criarCarro)
router.get("/", listarCarros)
router.get("/:id", buscarCarro)
router.put("/:id", atualizarCarro)
router.delete("/:id", deletarCarro)

export default router
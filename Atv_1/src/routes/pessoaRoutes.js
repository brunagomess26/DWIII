import { Router } from "express"
import {
  criarPessoa,
  listarPessoas,
  buscarPessoa,
  atualizarPessoa,
  excluirPessoa
} from "../controllers/pessoaController.js"

const router = Router()

router.post("/",      criarPessoa)
router.get("/",       listarPessoas)
router.get("/:id",    buscarPessoa)
router.put("/:id",    atualizarPessoa)
router.delete("/:id", excluirPessoa)

export default router
// pessoaCarroRoutes.js
import { Router } from "express"
import {
  adicionarCarroPessoa,
  listarRelacoes,
  excluirRelacao
} from "../controllers/pessoaCarroController.js"

const router = Router()

router.post("/", adicionarCarroPessoa)
router.get("/", listarRelacoes)
router.delete("/:pessoaId/:carroId", excluirRelacao)

export default router
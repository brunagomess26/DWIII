import "dotenv/config"
import express from "express"
import { fileURLToPath } from "url"
import { dirname, join } from "path"

import carroRoutes from "./routes/carroRoutes.js"
import pessoaRoutes from "./routes/pessoaRoutes.js"
import pessoaCarroRoutes from "./routes/pessoaCarroRoutes.js"

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()

app.use(express.json())
app.use(express.static(join(__dirname, ".", "public")))  // ← serve o HTML

app.use("/carros", carroRoutes)
app.use("/pessoas", pessoaRoutes)
app.use("/relacoes", pessoaCarroRoutes)

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000")
})
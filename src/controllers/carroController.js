import prisma from "../prisma/client.js"
// criar carro
export async function criarCarro(req, res) {
  try {
    const { modelo, marca, ano } = req.body

    const carro = await prisma.carro.create({
      data: { modelo, marca, ano }
    })

    res.json(carro)
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
}

// listar carros
export async function listarCarros(req, res) {
  try {
    const carros = await prisma.carro.findMany()
    res.json(carros)
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
}

// buscar carro
export async function buscarCarro(req, res) {
  try {
    const { id } = req.params

    const carro = await prisma.carro.findUnique({
      where: { id: Number(id) }
    })

    res.json(carro)
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
}

// atualizar carro
export async function atualizarCarro(req, res) {
  try {
    const { id } = req.params
    const { modelo, marca, ano } = req.body

    const carro = await prisma.carro.update({
      where: { id: Number(id) },
      data: { modelo, marca, ano }
    })

    res.json(carro)
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
}

// deletar carro
export async function deletarCarro(req, res) {
  try {
    const { id } = req.params

    await prisma.carro.delete({
      where: { id: Number(id) }
    })

    res.json({ mensagem: "Carro deletado com sucesso" })
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
}
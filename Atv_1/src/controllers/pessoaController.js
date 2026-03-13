import prisma from "../prisma/client.js"

export async function criarPessoa(req, res) {
  try {
    const { nome, email } = req.body
    const pessoa = await prisma.pessoa.create({
      data: { nome, email }
    })
    res.json(pessoa)
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
}

export async function listarPessoas(req, res) {
  try {
    const pessoas = await prisma.pessoa.findMany()
    res.json(pessoas)
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
}

export async function buscarPessoa(req, res) {
  try {
    const id = parseInt(req.params.id)
    const pessoa = await prisma.pessoa.findUnique({
      where: { id }
    })
    if (!pessoa) return res.status(404).json({ erro: "Pessoa não encontrada" })
    res.json(pessoa)
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
}

export async function atualizarPessoa(req, res) {
  try {
    const id = parseInt(req.params.id)
    const { nome, email } = req.body
    const pessoa = await prisma.pessoa.update({
      where: { id },
      data: { nome, email }
    })
    res.json(pessoa)
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ erro: "Pessoa não encontrada" })
    }
    res.status(500).json({ erro: error.message })
  }
}

export async function excluirPessoa(req, res) {
  try {
    const id = parseInt(req.params.id)
    await prisma.pessoa.delete({
      where: { id }
    })
    res.json({ mensagem: "Pessoa excluída com sucesso" })
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ erro: "Pessoa não encontrada" })
    }
    res.status(500).json({ erro: error.message })
  }
}
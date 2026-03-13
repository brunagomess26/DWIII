import prisma from "../prisma/client.js"

export async function adicionarCarroPessoa(req, res) {
  try {
    const { pessoaId, carroId } = req.body
    const relacao = await prisma.pessoaPorCarro.create({
      data: {
        pessoaId: parseInt(pessoaId),
        carroId: parseInt(carroId)
      }
    })
    res.json(relacao)
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
}

export async function listarRelacoes(req, res) {
  try {
    const relacoes = await prisma.pessoaPorCarro.findMany({
      include: {
        pessoa: true,
        carro: true
      }
    })
    res.json(relacoes)
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
}

export async function excluirRelacao(req, res) {
  try {
    const { pessoaId, carroId } = req.params
    await prisma.pessoaPorCarro.delete({
      where: {
        pessoaId_carroId: {
          pessoaId: parseInt(pessoaId),
          carroId: parseInt(carroId)
        }
      }
    })
    res.json({ mensagem: "Relação excluída com sucesso" })
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
}
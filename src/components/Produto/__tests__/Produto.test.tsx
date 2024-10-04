import { screen } from '@testing-library/react'
import Produto from '..'
import { renderizaComProvider } from '../../../utils/tests'

describe('Testes para o componente produto', () => {
  test('Deve renderizar corretamente', () => {
    const jogo = {
      id: 2,
      categoria: 'RPG',
      imagem: '',
      plataforma: ['Windows', 'PS5', 'Xbox Series S/X'],
      preco: 199.9,
      precoAntigo: 299.9,
      titulo: 'Hogwarts Legacy'
    }
    renderizaComProvider(<Produto game={jogo} />)
    expect(screen.getAllByText('Hogwards Legacy')).toBeInTheDocument
  })
})

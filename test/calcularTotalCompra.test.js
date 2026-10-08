import { expect } from 'chai'
import { calcularTotalCompra } from '../source/calcularTotalCompra.js'

describe('Teste do carrinho de supermercado', function () {

    it('Validar o total da compra sem desconto', function () {
        const listaProdutos = [
            { nome: 'Arroz', preco: 22.00 },
            { nome: 'Feijão', preco: 3.50 },
            { nome: 'Macarrao', preco: 7 }
        ]

        const resultadoEsperado = 32.50
        let resultadoEncontrado = calcularTotalCompra(listaProdutos)

        expect(resultadoEncontrado).to.equal(resultadoEsperado)
    })

    it('Validar compra com desconto de 10%', function () {
        const listaProdutos = [
            { nome: 'Arroz', preco: 220.00 },
            { nome: 'Feijão', preco: 3.50 },
            { nome: 'Macarrao', preco: 7 }
        ]

        const resultadoEsperado = 207.45
        let resultadoEncontrado = calcularTotalCompra(listaProdutos)

        expect(resultadoEncontrado).to.equal(resultadoEsperado)
    })

    it('Validar compra de 200 reais sem desconto', function () {
        const listaProdutos = [
            { nome: 'Arroz', preco: 190.00 },
            { nome: 'Feijão', preco: 3.00 },
            { nome: 'Macarrao', preco: 7 }
        ]

        const resultadoEsperado = 200
        let resultadoEncontrado = calcularTotalCompra(listaProdutos)

        expect(resultadoEncontrado).to.equal(resultadoEsperado)
    })

})
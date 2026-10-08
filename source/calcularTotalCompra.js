const listaProdutos = [
    { nome: 'Arroz', preco: 22.00 },
    { nome: 'Feijão', preco: 3.50 },
    { nome: 'Macarrao', preco: 7 }
]

export function calcularTotalCompra(listaProdutos) {
    let totalCompra = 0

    for (let i = 0; i < listaProdutos.length; i++) {
        totalCompra += listaProdutos[i].preco
    }

    if (totalCompra > 200) {
        totalCompra = totalCompra - (totalCompra * 0.10)
    }

    return totalCompra
}

console.log(calcularTotalCompra(listaProdutos))
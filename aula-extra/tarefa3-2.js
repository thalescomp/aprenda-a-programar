/*
Um cliente que vende produtos internacionais e nacionais conseguiu extrair alguns dados de seu programa financeiro. O problema é que esse programa retorna os dados na forma de mapas e traz apenas o valor do produto e se ele é internacional ou nacional, mas não calcula os impostos.

Dada essa situação, ele contratou você para criar um programa que, ao receber o mapa de um produto, verifica se ele é nacional ou internacional e aplica 20% de impostos caso seja de outro país e 12% caso seja brasileiro. Uma vez aplicado o imposto, o programa imprime na tela o valor total do produto.

Base de dados que o cliente passou para você:
*/
let produtoA = {
    "nome": "camiseta",
    "valor": 100.00,
    "internacional": true
}
let produtoB = {
    "nome": "perfume",
    "valor": 200.00,
    "internacional": true
}
let produtoC = {
    "nome": "sandália",
    "valor": 120.00,
    "internacional": false
}

/*
Copie essa base para o seu código e escreva um programa que resolve o problema do cliente e exibe as informações dos produtos e o valor aplicado os impostos devidos. Você deve testar o seu código com os 3 produtos.
*/

if (produtoA.internacional == true) {
    let valorFinalProdutoA = produtoA.valor*1.2
    console.log(produtoA.nome)
    console.log(valorFinalProdutoA)
} else {
    let valorFinalProdutoA = produtoA.valor*1.12
    console.log(produtoA.nome)
    console.log(valorFinalProdutoA)
}

if (produtoB.internacional == true) {
    let valorFinalProdutoB = produtoB.valor*1.2
    console.log(produtoB.nome)
    console.log(valorFinalProdutoB)
} else {
    let valorFinalProdutoB = produtoB.valor*1.12
    console.log(produtoB.nome)
    console.log(valorFinalProdutoB)
}

if (produtoC.internacional == true) {
    let valorFinalProdutoC = produtoC.valor*1.2
    console.log(produtoC.nome)
    console.log(valorFinalProdutoC)
} else {
    let valorFinalProdutoC = produtoC.valor*1.12
    console.log(produtoC.nome)
    console.log(valorFinalProdutoC)
}

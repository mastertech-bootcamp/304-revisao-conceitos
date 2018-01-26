interface Produto {
    nome: string,
    preco: number,
    validade: number,
    sabor: Sabores
}

enum Sabores {
    Bolonhesa = 'Bolonhesa', 
    MolhoBranco = 'Molho Branco', 
    QueijoPresunto = 'Queijo/Presunto', 
    Bauro = 'Bauru', 
    Frango = 'Frango'
};

let produto1 = {
    nome: 'Panqueca',
    preco: 10,
    validade: 1,
    sabor: Sabores.Bolonhesa
};

let produto2 = {
    nome: 'Panqueca',
    preco: 10,
    sabor: Sabores.QueijoPresunto
};

function imprimirProduto(produto:Produto){
    console.log(`${produto.nome} ${produto.sabor}: R$ ${produto.preco}, validade ${produto.preco} dias`);
}

imprimirProduto(produto1);
imprimirProduto(produto2);//erro de compilação

// function soma(n1:number, n2:number):number{
//     return n1 + n2;
// }
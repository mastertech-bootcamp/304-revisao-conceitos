class Carta{
    naipe:string;
    valor:string;

    constructor(umValor:string, umNaipe:string){
        this.naipe = umNaipe;
        this.valor = umValor;
    }
}

class Maco{
    naipes = ['Paus', 'Ouros', 'Espadas', 'Copas'];
    valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    cartas = [];

    constructor(){
        for(let naipe of this.naipes){
            for(let valor of this.valores){
                let carta = new Carta(valor, naipe);
                this.cartas.push(carta);
            }
        }
    }

    sortear(){
        let sorteio = Math.floor(Math.random() * this.cartas.length);
        return this.cartas.splice(sorteio, 1);
    }
}

let maco = new Maco();

console.log(`O baralho tem ${maco.cartas.length} cartas`);

console.log(maco.sortear());
console.log(maco.sortear());
console.log(maco.sortear());
console.log(maco.sortear());

console.log(`O baralho tem ${maco.cartas.length} cartas`);

// let carta1 = new Carta('4', 'Ouros');
// carta1.naipe = 'Ouros';
// carta1.valor = '4';

// console.log(carta1);

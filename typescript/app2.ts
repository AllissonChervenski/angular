import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'




// Criar carros
let carroA = new Carro('Veloster', 3);
let carroB = new Carro('gol', 4);
let carroC = new Carro('corsa', 4);
// Criar lista de carros

let listaDecarros: Array<Carro> = [carroA,carroB,carroC];

let concessionaria = new Concessionaria('Av Paulista', listaDecarros)


// Exibir lista de carros



//  comprar o carro

let pessoa = new Pessoa("Gabriel", "Veloster");

concessionaria.mostrarListaDeCarros().map((carro: Carro) =>{
    if(carro['modelo'] == pessoa.dizerCarroPreferido()){
        // compra o carro
        pessoa.comprarCarro(carro);
    }
})

console.log(pessoa.dizerCarroQueTem());


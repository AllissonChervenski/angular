"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
// Criar carros
var carroA = new Carro_1.default('Veloster', 3);
var carroB = new Carro_1.default('gol', 4);
var carroC = new Carro_1.default('corsa', 4);
// Criar lista de carros
var listaDecarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Av Paulista', listaDecarros);
// Exibir lista de carros
//  comprar o carro
var pessoa = new Pessoa_1.default("Gabriel", "Veloster");
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == pessoa.dizerCarroPreferido()) {
        // compra o carro
        pessoa.comprarCarro(carro);
    }
});
console.log(pessoa.dizerCarroQueTem());

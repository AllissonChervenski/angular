import Carro from './Carro'
import ConcessionariaInterface from './ConcessionariaInterface'

export  default class Concessionaria implements ConcessionariaInterface{
    private endereco: string
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarros: Array<Carro>){
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }

    public fornecerEndereco(): string{
        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros
    }

    public forncecerHorariosDeFuncionamento():string{
        return 'De segunda a sexta das 08 as 18'
    }

}

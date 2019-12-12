import DaoInterface from "./DaoInterface";
import Concessionaria from "./Concessionaria";

export default class ConcessionariaDao implements DaoInterface<T> {

    nomeTabela: string = 'tb_concessionaria'

    inserir(object: Concessionaria): boolean {
        console.log('Logica de insert');
        
        return true
    }
    atualizar(object: Concessionaria): boolean {
        console.log('Logica de update');
        return true
    }
    remover(id:number):Concessionaria {
        console.log('Logica de delete');
        return new Concessionaria('',[]);
    }
    selecionar(id:number):Concessionaria {
        console.log('Logica de select');
        return new Concessionaria ('',[]);
    }
    selecionarTodos(): [any]{
        console.log('Logica de getALL');
        return [new Concessionaria('',[])];
    }
}
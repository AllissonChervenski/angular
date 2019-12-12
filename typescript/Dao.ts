import DaoInterface from "./DaoInterface";


export class Dao<T> implements DaoInterface<T> {
    
    nomeTabela: string = 'tb_concessionaria'

    inserir(object: T): boolean {
        console.log('Logica de insert');
        
        return true
    }
    atualizar(object: T): boolean {
        console.log('Logica de update');
        return true
    }
    remover(id:number):T {
        console.log('Logica de delete');
        return Object();
    }
    selecionar(id:number):T {
        console.log('Logica de select');
        return Object();
    }
    selecionarTodos(): [T]{
        console.log('Logica de getALL');
        return [Object()];
    }
}
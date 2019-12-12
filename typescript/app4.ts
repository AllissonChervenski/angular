import { Dao } from "./Dao";
import Concessionaria from "./Concessionaria";


// let dao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria('',[])

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>();

dao3.inserir(concessionaria);
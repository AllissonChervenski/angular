"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    Dao.prototype.inserir = function (object) {
        console.log('Logica de insert');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('Logica de update');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('Logica de delete');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('Logica de select');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('Logica de getALL');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;

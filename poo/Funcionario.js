import Pessoa from "./Pessoa.js";

class Funcionario extends Pessoa {
    constructor(nome, idade, cpf, cargo, salario) {
        super(nome, idade, cpf);
        this.cargo = cargo;  
        this.salario = salario;
    }

    mostrarDadosFunc() {
        super.mostrarDados();
        console.log("----------Dados de Funcionário----------");
        console.log(`Cargo: ${this.cargo}`);
        console.log(`Salario: ${this.salario}\n`);
    }
}

/* const funcionario1 = new Funcionario("Eliel", 20, "333.444.555-66", 111222233334444, "01/04/2007", "Sênior");
funcionario1.mostrarDados(); */

export default Funcionario;
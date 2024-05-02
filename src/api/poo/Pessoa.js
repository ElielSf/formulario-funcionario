class Pessoa {
  constructor(nome, idade, cpf) {
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
  }

  mostrarDados() {
    console.log("----------Dados de Pessoa----------");
    console.log(`Nome: ${this.nome} \nIdade: ${this.idade} \nCPF: ${this.cpf}\n`);
  }
}

/* const pessoa1 = new Pessoa("Eliel", 17, "098.087.075-56", 111222233334444, "01/04/2007");
pessoa1.mostrarInformacoes(); */

/* const pessoa2 = new Pessoa("Alguem", 20, "111.222.333-44", 555666677778888, "10/02/2004");
pessoa2.mostrarInformacoes(); */

export default Pessoa;


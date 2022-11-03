type Admin = {
    nome: string;
    privilegios: string[];
}

type Funcionario = {
    nome: string;
    dataInicio: Date;
}

type FuncionarioAdmin = Admin & Funcionario;

let funcionario: Funcionario = {
    nome: "Helio",
    dataInicio: new Date()
};

// let funcionarioAdmin: FuncionarioAdmin = {}
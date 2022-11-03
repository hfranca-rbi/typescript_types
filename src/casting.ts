interface Pessoa {
    nome: string;
    idade: number;
}


const p1 = <Pessoa>{
    nome: "Helio",
    idade: 33
}

const p2 = {
    nome: "João",
    idade: 9
} as Pessoa;



let x: unknown = "helio";
console.log((x as string).length); // Funciona
// console.log((4 as string).length); // Não funciona

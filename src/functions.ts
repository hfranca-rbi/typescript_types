
function doSomething(nome: string, callback: Function) {
    console.log(`Nome: ${nome}`);

    callback(nome);
}


function doSomethingMoreSpecific(nome: string, callback: (a: string) => void) {
    console.log(`Nome: ${nome}`);

    callback(nome);
}
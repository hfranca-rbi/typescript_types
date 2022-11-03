
type Combinavel = number | string;

function combinar(n1: Combinavel, n2: Combinavel) {
    if (typeof n1 == 'number' && typeof n2 == 'number') {
        return n1 + n2;
    } else {
        return n1.toString() + n2.toString();
    }
}


console.log(combinar(10, 10));
console.log(combinar("Hello ", "World!"));
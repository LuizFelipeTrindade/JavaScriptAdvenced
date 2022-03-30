const numero1 = 10, numero2 = 20;

if((numero1 === 10) && (numero2 === 20)){
    console.log('A expressão If foi sugerida com valor verdadeiro');
}else {
    console.log('Expressão if foi suprida com valor falso');
}

const string1 = "Java", string2 =  "Script";

if((string1 === "Javaa") || (string2 === "JavaScript")){
    console.log('Expressão if foi suprida com um valor verdadeiro');
}else{
    console.log('Expressão if foi suprida com um valor falso');
}

const somaoumultiplica = (valor) => {
    return valor >= 10? valor+valor : valor*valor
}

console.log('Menores que 10: ')
console.log(somaoumultiplica (1))
console.log(somaoumultiplica (2))
console.log(somaoumultiplica (3))
console.log(somaoumultiplica (6))
console.log(somaoumultiplica (9))

console.log('maiores ou iguais a 10: ')
console.log(somaoumultiplica (10))
console.log(somaoumultiplica (11))
console.log(somaoumultiplica (20))
console.log(somaoumultiplica (50))
console.log(somaoumultiplica (100))



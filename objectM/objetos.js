const destino = {a: 1, b: 2};
const origem = {b: 4, c: 5};

const destinoretornado = Object.assign(destino, origem); //Retona a mistura dos dois objects

console.log(destinoretornado, destino);



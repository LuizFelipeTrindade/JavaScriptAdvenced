// const destino = {a: 1, b: 2};
// const origem = {b: 4, c: 5};

// const destinoretornado = Object.assign(destino, origem); //Retona a mistura dos dois objects

// console.log(destinoretornado, destino);

//Clonagem ed objetos

const obj = {a: 1};
const copia = Object.assign({}, obj);

//Mesclando objeto

const o1 = {a: 1};
const o2 = {b: 2};
const o3 = {c: 3};

const obja = Object.assign({} ,o1, o2, o3); //É como se fosse uma concatenação

console.log(obja, o1);



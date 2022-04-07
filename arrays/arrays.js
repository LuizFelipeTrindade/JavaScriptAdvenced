let frutas = ["Maça", "Banana", 5];

console.log(frutas.length);

//ou

let frutasUsandoNew = new Array('Maça', 'Banana')//declaração com argumento

let arrTamanho = new Array(10)//dando o numero de posições como argumentos  

console.log(frutasUsandoNew);

//Array Denso
const arrDenso = [1, 2, 3, 4, 5, 6];

//Array esparso
const arrEsparso = [1,,,3];

arrEsparso[10] = 10;

console.log(arrEsparso)
console.log(arrDenso)



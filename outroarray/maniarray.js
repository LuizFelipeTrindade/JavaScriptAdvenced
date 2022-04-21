//Craindo Um subArray

const arrSubArray = ["Luiz Felipe", "Developer", "Python", "Java", "Node"];

const Subarray = arrSubArray.slice(2); // "Fatiar Array"

console.log(Subarray);


//Ordenando um Array 

const arrayOrdenado = [2, 3, 1, 10, 9, 4, 5, 9, 8, 0];

arrayOrdenado.sort((a,b) => a - b); //Do menor para o Maior

console.log(arrayOrdenado);

// Filter, Fund, Foreach, Map, Redunce

const arrBase = [
    {a: 2, b: 2},
    {a: 1, b: 2},
    {a: 5, b: 2},
    {a: 1, b: 2},
    {a: 10, b: 2}
]

const filtered = arrBase.filter(el => el.a > 2);

const find = arrBase.find(el => el.a == 10);

const foraaa = arrBase.forEach(el => console.log(`a: ${el.a}, b ${el.b}`));

const maped = arrBase.map(el => el.a += 1);

const reduceeee = arrBase.reduce((acc, curr) => acc = acc + curr.a, 0);
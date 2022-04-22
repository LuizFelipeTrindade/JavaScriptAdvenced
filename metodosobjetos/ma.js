const fromA = {
    'abc': 2,
    'def': 4
};

const obj = Object.entries(fromA); //Transforma um Objeto em Array

console.log(obj)

/*Object.fromEntries*/
//Transforma um Array em um Objeto

const objetoNovo = {
    100: 'a',
    2: 'b',
    7: 'c'
}

const chave = Object.keys(objetoNovo) //Mostra as propriedades do Objeto

const valor = Object.values(objetoNovo)//Mostra os valores do objeto

console.log(chave, valor);

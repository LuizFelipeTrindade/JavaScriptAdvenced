// let meuCarro = {
//     cor: "vermelho",
//     marca: "onix",
//     ano: "2004",
//     motor: null
// }

//console.log(meuCarro);

let TestandoFunctionemObj = {
    Carro: "HB20",
    Cor: "Cinza",
    Estado: "0KM",
    f: function Carros(){
        if("HB20" && "Cinza"){
            console.log('Quero esse')
        }else{
            console.log('Não quero esse')
        }
    }
}

TestandoFunctionemObj.Cor = "Black";

console.log(TestandoFunctionemObj);

console.log(TestandoFunctionemObj.f());


const str1 = "Brazinial Dev";

console.log(str1)

const funcaoLegal = (str) => {
    const retorno = str1 + " é legal";
    return retorno;
}

const retornoFuncaoLegal = funcaoLegal(str1)

if(str1.length > 10) {
    console.log(retornoFuncaoLegal)
}else {
    console.log("Não deu pra executar funcaoLegal")
}




//const objetoVazio = {}

const dotNotation = {
    prop1: "Sou uma propriedade que será acessada usando dot notation",
    metodo: function(){
        return "Sou um retorno de um método, ou seja, sou uma função dentro de um objeto"
    }
}

dotNotation.prop2 = "Sou outra propriedade"
dotNotation.metodo2 = () => "Sou o retorno do novo metodo"


console.log(dotNotation.prop1)
console.log(dotNotation.metodo())
console.log(dotNotation.prop2)
console.log(dotNotation.metodo2())


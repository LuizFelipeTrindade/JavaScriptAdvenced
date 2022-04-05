const bracketNotation = {
    prop1: "Sou uma propriedade que será acessada por bracketNotation",
    metodo: function(){
        return "O homem nasce bom de cama , mas a punheta o destrói"
    }
}

console.log(bracketNotation["prop1"]);
console.log(bracketNotation["metodo"]());


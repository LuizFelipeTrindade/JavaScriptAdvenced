const meuArrayLiteral = [1,2,3] //Forma Literal

const MeuArrayConstrutorInstance = new Array(1, 2, 3);

const arrow = {
    prop1: "Retornador",
    f: function somador(){
        return function somar(n1, n2){
            return n1 + n2;
        }
    }
}
console.log(arrow(5, 2));
console.log(arrow);



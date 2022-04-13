function sayHello() {
    return "Hello, ";
 } //Hello


 function greeting(helloMessage, name) {
   console.log(helloMessage() + name);
 }


 // Passar `sayHello` como um argumento pra função `greeting`
 greeting(sayHello, "JavaScript!");

//Retornando uma função

function printaBrDev(){
    return function(){
        console.log("BrDev!");
    }
}

printaBrDev()();



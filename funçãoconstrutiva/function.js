function Ventilador(velMax){
    this.velocidadeMaxima = velMax;
    this.ligado = false;
}

const ventilador1 = new Ventilador(3);

console.log(ventilador1.velocidadeMaxima);


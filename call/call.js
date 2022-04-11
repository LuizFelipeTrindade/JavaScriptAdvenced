//EXEMPLO DO BIND ==========//

function thisBindExemplo(){
    console.log(this)
}

const obj = {exemplo: 'exemplo'}

thisBindExemplo = thisBindExemplo.bind(obj);

thisBindExemplo()

//EXEMPLO CALL() e BIND()

const obj1 = {exemplo1: "exemplo1", mostrathis: function thisCallExemplo(){
    console.log(this)
}}

obj1.mostrathis;

const obj2 = {exemplo2: "Exemplo2"};

obj1.mostrathis.call(obj2)

const obj4 = {exemplo1: "exemplo1", mostrathis: function thisCallExemplo(){
    console.log(this)
}}

obj1.mostrathis;

const obj3 = {exemplo2: "Exemplo2"};

obj1.mostrathis.apply(obj2)

function apresentacao() {
    var resposta = [this.pessoa, 'é um excelente', this.funcao].join(' ');
    console.log(resposta);
  }
  
  var i = {
    pessoa: 'Douglas Crockford', funcao: 'Desenvolvedor Javascript'
  };
  
  apresentacao.call(i);


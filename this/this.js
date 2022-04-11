//This === window



console.log(this.document === document)
console.log(this === window)

this.a = 37
console.log(window.a)

//This na função

function thisNaoEstrito(){
    console.log(this)
}

function thisEstrito(){console.log(this)}

const o = {
    prop: 100,
    f: function() {
        return this.prop
    }
};

console.log(o.f())

const obj1 = {
    exemplo1: "exemplo1",
    mostraThis: function() {
        const f = (() => this)()
        console.log(obj1.mostraThis())
    }
}

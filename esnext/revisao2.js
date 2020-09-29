//Arrow function

const soma = (a, b) => a + b;
console.log(soma(1, 2));

//Arrow function(this)
const lexicon1 = () => console.log(this === exports);
const lexicon2 = lexicon1.bind({})
lexicon1()
lexicon2()

//parametro defaults

function log(texto = "node") {
    console.log(texto);
}
log("legal")
log()

//operador rest
function total(...numeros) {
    let total = 0;
    numeros.forEach(m => total += m);
    return total;
}

console.log(total(2, 3, 4));
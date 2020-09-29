const tecnologia = new Map();
tecnologia.set("react", {framework: false});
tecnologia.set("angular", {framework: true});

console.log(tecnologia.react);
console.log(tecnologia.get("react"));

const chavesVariadas = new Map([
    [function () {}, "Função"],
    [{}, "Objeto"],
    [123, "Número"],
]);

chavesVariadas.forEach((valor, chave) =>{
    console.log(chave, valor);
})

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);

tecnologia.set(123, "a");
tecnologia.set(123, "b");

console.log(chavesVariadas)
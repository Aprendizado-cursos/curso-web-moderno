//usar spread com objeto

const funcionario = {
    nome: "maria", salario: 12348.99
}
const clone = { ativo: true, ...funcionario }

console.log(funcionario);
console.log(clone);

//usar spread com array 
const grupoA = ["joão", "pedro", "gloria"];
const grupoFinal = ["maria", ...grupoA, "Rafaela"]
console.log(grupoFinal);
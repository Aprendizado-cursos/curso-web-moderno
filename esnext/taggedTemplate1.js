//tagged templates
function tag(partes, ...valores) {
    console.log(partes);
    console.log(valores);
    return "Outra String"
}

const aluno = "gui"
const situação = "Aprovado"

console.log(tag`${aluno} está ${situação}`);
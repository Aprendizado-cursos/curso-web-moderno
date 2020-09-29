//não aceita repetição/não indexada

const times = new Set()
times.add("São paulo").add("Palmeiras").add("Corinthians").add("Flamengo")
times.add("São paulo")

console.log(times);
console.log(times.size);
console.log(times.has("são paulo"));
console.log(times.has("São paulo"));
times.delete("Flamengo");
console.log(times.has("Flamengo"));

const nomes = ["Raquel", "Lucas", "Julia", "Lucas"]
const nomeSet = new Set(nomes);
console.log(nomeSet);
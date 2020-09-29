for(let letra of "Cod3r"){
    console.log(letra);
}

const assuntosEcman = ['Map', "set", "Promise"]
for(let i in assuntosEcman){
    console.log(i);
}

for(let i of assuntosEcman){
    console.log(i);
}

const assuntosMap = new Map([
    ["Map", {abordado: true}],
    ["Set", {abordado: true}],
    ["Promise", {abordado: false}]
])

for(let i of assuntosMap){
    console.log(i);
}

for(let i of assuntosMap.keys()){
    console.log(i);
}

for(let i of assuntosMap.values()){
    console.log(i);
}

for(let [cv, vl] of assuntosMap.entries()){
    console.log(cv, vl);
}
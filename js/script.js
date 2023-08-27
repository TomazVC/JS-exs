// Exercicio 1:

let valores = [500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000];

const alterador = function(valor){
    if (valor <= 2000){
        return ((valor) + (valor * 0.15));
    }
    else{
        return ((valor) + (valor * 0.10));
    }
};

const valoresAlterados = valores.map(alterador);

console.log(valoresAlterados);

// Exercicio 2:

const valoresSelecionados = valoresAlterados.filter(item => item >= 2500);

console.log(valoresSelecionados);

// Exercicio 3:

const somaValores = valoresSelecionados.reduce((acumulado, atual) => acumulado + atual);

console.log(somaValores);
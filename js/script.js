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

// Exercíocio final:

const formCadastro = document.querySelector("#formCadastro");
const tabelas = document.querySelector("#tabelas");
const ordenar = document.querySelector("#ordenar");

let listaCadastro = [];

formCadastro.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const inDescricao = document.querySelector("#idDescricao").value;
    const inAutor = document.querySelector("#idAutor").value;
    const inDepartamento = document.querySelector("#idDepartamento").value;
    const inImportancia = document.querySelector("#idImportancia").value;
    const inValor = document.querySelector("#idValor").value;
    const inDuracao = document.querySelector("#idDuracao").value;

    const cadastro = {
        inDescricao,
        inAutor,
        inDepartamento,
        inImportancia,
        inValor,
        inDuracao,
    };

    listaCadastro.push(cadastro);
    atualizar();
    formCadastro.reset();
});

function atualizar(){

tabelas.innerHTML = `
    <tr>
    <th>Descrição</th>
    <th>Autor</th>
    <th>Departamento</th>
    <th>Importância</th>
    <th>Valor</th>
    <th>Duração</th>
    <th></th>
    </tr>
    ${listaCadastro.map((cadastro, index) => `
        <tr>
            <td>${cadastro.inDescricao}</td>
            <td>${cadastro.inAutor}</td>
            <td>${cadastro.inDepartamento}</td>
            <td>${cadastro.inImportancia}</td>
            <td>${cadastro.inValor || ""}</td>
            <td>${cadastro.inDuracao || ""}</td>
            <td><button onclick="removeCadastro(${index})">Excluir</button></td>
        </tr>    
        `).join("")}
    `;
}

function removeCadastro(index){
    listaCadastro.splice(index, 1);
    atualizar();
}

ordenar.addEventListener("click", function () {
    listaCadastro.sort((a, b) => b.inImportancia - a.inImportancia);
    atualizar();
});
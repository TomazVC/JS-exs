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

    const cadastro = {//cria um objeto que armazena os valores colocados, como um dicionario em python
        inDescricao,
        inAutor,
        inDepartamento,
        inImportancia,
        inValor,
        inDuracao,
    };

    listaCadastro.push(cadastro); //vai inserir as cadastros na lista
    atualizar(); //vai dar update no html
    formCadastro.reset(); //vai resetar para inserir novos cadastros
});

function atualizar(){
    //substitui a tabela atual por uma nova tabela, estruturada no html
    //${} permite que eu insira novas expressoes js dentro da string
    //<tr> cria a linha de cabeçalho da tabela com os titulos das colunas
    //listaCadastro.map itera sobre a matriz de tarefas (listaCadastro) e cria uma nova linha HTML para cada tarefa
    //${cadastro.inDescricao}, ${cadastro.inAutor}, etc.: usado para as propriedades de cada objeto preencher as células da tabela
    //${cadastro.inValor || ""} e ${cadastro.inDuracao || ""}: é usado o operador || para fornecer um valor padrão (no caso, uma string vazia "")
    //caso o valor de cadastro.inValor ou cadastro.inDuracao seja falso (como null, undefined ou false)
    //<button onclick="removeCadastro(${index})">Excluir</button>: é criado um botão "Excluir" em cada linha da tabela
    //Quando esse botão é clicado, ele chama a função removeCadastro(index) para remover a tarefa correspondente da matriz
    //.join(""): A função map cria um array de strings (uma para cada linha da tabela). O .join("") é usado para juntar essas strings em um único bloco de HTML
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
//listaCadastro.splice(index, 1): A função splice é usada para modificar uma matriz, removendo ou substituindo elementos
//estou removendo um elemento da matriz listaCadastro com base no índice index. O segundo argumento 1 indica que queremos remover um único elemento a partir desse índice
//Após remover a tarefa da matriz, chamo a função atualizar() para atualizar a tabela na página, refletindo as alterações feitas na matriz
function removeCadastro(index){
    listaCadastro.splice(index, 1);
    atualizar();
}
//Dentro dessa função anônima, estamos usando o método sort da matriz para ordenar as tarefas com base em sua importância (inImportancia)
//A função de comparação ((a, b) => b.inImportancia - a.inImportancia) classifica as tarefas em ordem decrescente de importância
ordenar.addEventListener("click", function () {
    listaCadastro.sort((a, b) => b.inImportancia - a.inImportancia);
    atualizar();
});
// variáveis
let soufoda = "letisca"; //var local
var nacama = "te esculacho"; //var global/nao usado com frequencia
const pi = 3.14159265358979; //constante

// array
let namorados = ['gw','alemao','jhenizao','malu','1.30','malandrao','bob, o construtor']

// objetos
const letica = {
    nome: "letição",
    idade: 18,
    namorados: [ 'gw', 'alemao']
};
console.log(letica.nome + " ama muito seu homem bad boy " + letica.namorados[0]);

// função comum
function soma(a, b) {
    return a + b;
}

// função anônima atribuída
const mult = function (a, b) {
    return a * b;
};

// arrow function
const sub = (a, b) => a - b;

// principais métodos de array
// .map()
// .filter()
// .find()
// .findIndex()
// .indexof()
// .reduce()

// funções com getElementById e função OnClick
let title = document.getElementById('el1');
console.log(title);

const showtext = () => {
    let inputtext = document.getElementById('el2').value;
    alert(inputtext);
};

// selecionando elementos
// getElementById("id") → pega um elemento pelo seu id.
// getElementsByClassName("classe") → pega todos elementos com determinada classe.
// querySelector("seletor") → retorna o primeiro elemento que bate com o seletor CSS.
// querySelectorAll("seletor") → retorna todos elementos que batem com o seletor.

// alterando conteúdo e atributos
// innerText → muda ou lê o texto visível do elemento.
// innerHTML → altera ou lê o conteúdo HTML dentro do elemento.
// setAttribute("atributo", "valor") → muda atributos, tipo src ou href.
// getAttribute("atributo") → lê atributos existentes.

// gerenciando estilos
// element.style.propriedade = "valor" → altera CSS diretamente.
// classList.add("classe"), .remove("classe"), .toggle("classe") → controla classes CSS dinamicamente.

// adicionando e removendo elementos
// document.createElement("tag") → cria um novo elemento.
// appendChild, prepend → adicionam elementos na árvore DOM.
// remove() → remove um elemento da página.

const changecolor = () => {
    let currcircle = document.getElementById('mycircle');
    if (currcircle.className == "circle ok") {
        currcircle.className = "circle notok";
    } else {
        currcircle.className = "circle ok";
    }
};

const changecolorpick = () => {
    let currcircle = document.getElementById('mycirclepick');
    let color = document.getElementById('colorpick');
    currcircle.style.backgroundColor = color.value;
};
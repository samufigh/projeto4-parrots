//variáveis e arrays-------------------------------------------------------------------------------------

const jogo = document.querySelector('.main');
let numDeCartas = null;
let mod = null;
const tiposDeCartas = [
    "./imagens/bobrossparrot.gif",
    "./imagens/explodyparrot.gif",
    "./imagens/fiestaparrot.gif",
    "./imagens/unicornparrot.gif",
    "./imagens/metalparrot.gif",
    "./imagens/revertitparrot.gif",
    "./imagens/tripletsparrot.gif",
  ];
  let deck = [];

//execução-----------------------------------------------------------------------------------------

//pergunta
do{
    numDeCartas=prompt("Com quantas cartas você quer jogar? Escolha entre 4 e 14.");
    mod = numDeCartas % 2;
} while (((numDeCartas < 1) || (numDeCartas > 14)) || (mod !== 0))

//embaralha as imagens
tiposDeCartas.sort(comparator);

//cria os pares
criarPares();

//embaralha as cartas
deck.sort(comparator);

//mostra a carta
mostrarDeck();

//funções--------------------------------------------------------------------------------------------------

//virar carta
function virarCarta(carta){
    const front=carta.querySelector('.frente');
    front.classList.toggle('rotateFront');
    const back=carta.querySelector('.tras');
    back.classList.toggle('rotateBack');
}

//embaralhar
function comparator() {
    return Math.random() - 0.5;
  }

//criar pares
function criarPares(){
    const numDePares = numDeCartas / 2;
    for (let i = 0; i < numDePares; i++){
        const carta = criarCartas(i);
        deck.push(carta);
        deck.push(carta);
    }
}

//criar cartas
function criarCartas(indice){
    const tipo = tiposDeCartas[indice];
    const carta = `<div class="card" onclick="virarCarta(this)">
        <div class="tras back-face face">
             <img src="${tipo}">
        </div>
        <div class="frente face">
            <img src="./imagens/back.png">
        </div>
    </div>
    `;
    return carta;
}

//mostrar cartas
function mostrarDeck(){
    for(i=0; i<numDeCartas; i++){
        jogo.innerHTML+=deck[i];
    }
}

//variáveis e arrays-------------------------------------------------------------------------------------

let numDeCartas = null;
let mod = null;
let tiposDeCartas = [
    "./img/bobrossparrot.gif",
    "./img/explodyparrot.gif",
    "./img/fiestaparrot.gif",
    "./img/unicornparrot.gif",
    "./img/metalparrot.gif",
    "./img/revertitparrot.gif",
    "./img/tripletsparrot.gif",
  ];
  let deck = [];

//execução-----------------------------------------------------------------------------------------

//embaralha o deck
deck.sort(comparator);

//pergunta
do{
    numDeCartas=prompt("Com quantas cartas você quer jogar? Escolha entre 4 e 14.");
    mod = numDeCartas % 2;
} while (((numDeCartas < 1) || (numDeCartas > 14)) || (mod !== 0))

//cria os pares


//cria as cartas
for(let i=0; i<numDeCartas; i++){
    let main=document.querySelector('.main');
    main.innerHTML= main.innerHTML + `
         <div class="card" onclick="virarCarta(this)">
            <div class="tras back-face face">
                Verso
            </div>
            <div class="frente face">
                <img src="./imagens/back.png">
            </div>
        </div>
    `;
}
criarPares();
 console.log(deck);

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
    const carta = `<div class="card" onclick="virarCarta(this)">
        <div class="tras back-face face">
             Verso
        </div>
        <div class="frente face">
            <img src="./imagens/back.png">
        </div>
    </div>
    `;
    return carta;
}
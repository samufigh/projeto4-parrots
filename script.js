//variáveis e arrays-------------------------------------------------------------------------------------

const jogo = document.querySelector('.main');
let numDeCartas = null;
let jogadas=0;
let mod = null;
const tiposDeCartas = [
    "./imagens/bobrossparrot.gif", "./imagens/explodyparrot.gif", "./imagens/fiestaparrot.gif", "./imagens/unicornparrot.gif",
 "./imagens/metalparrot.gif", "./imagens/revertitparrot.gif", "./imagens/tripletsparrot.gif"
  ];
  let deck = [];
  let cartasComparadas = [];
  let comparar = [];

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

    compararCartas(carta);
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

//comparar cartas
function compararCartas(carta){

    while (comparar.length>1){
        if(cartasComparadas[0] !== cartasComparadas[1]){
            desvirar(comparar[0], comparar[1]);
        }
        comparar.length=0;
        cartasComparadas.length=0;
        jogadas=jogadas+2;
    }

        const back = carta.querySelector('.tras');
        const imagem = back.querySelector('img');
        cartasComparadas.push(imagem.src);
        comparar.push(carta);
        console.log(comparar.length);

        console.log(cartasComparadas[0]);
        console.log(cartasComparadas[1]);


       if(cartasComparadas[0] === cartasComparadas[1]){  
            for (let i=0; i<2; i++){
                comparar[i].removeAttribute("onclick");
            }
        }
    }
    
function desvirar(carta1, carta2){
    console.log(carta1);
    const front1=carta1.querySelector('.frente');
    front1.classList.toggle('rotateFront');
    const back1=carta1.querySelector('.tras');
    back1.classList.toggle('rotateBack');

    console.log(carta2);
    const front2=carta2.querySelector('.frente');
    front2.classList.toggle('rotateFront');
    const back2=carta2.querySelector('.tras');
    back2.classList.toggle('rotateBack');
}


/*function desabilitar(){
    const carta = document.querySelector('.card');
    carta.classList.add('naoClicar');
    console.log(carta);
}*/

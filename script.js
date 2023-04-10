//variáveis e arrays-------------------------------------------------------------------------------------
let cartaVirada = [];
const jogo = document.querySelector('.main');
let numDeCartas = null;
let jogadas=0;
let cont=0;
let mod = null;
const tiposDeCartas = [
    "./imagens/bobrossparrot.gif", "./imagens/explodyparrot.gif", "./imagens/fiestaparrot.gif", "./imagens/unicornparrot.gif",
 "./imagens/metalparrot.gif", "./imagens/revertitparrot.gif", "./imagens/tripletsparrot.gif"
  ];
  let deck = [];
  let cartasComparadas = [];

//execução-----------------------------------------------------------------------------------------

//pergunta
do{
    numDeCartas=prompt("Com quantas cartas você quer jogar? Escolha entre 4 e 14.");
    mod = numDeCartas % 2;
} while (((numDeCartas < 4) || (numDeCartas > 14)) || (mod !== 0))

//embaralha as imagens
tiposDeCartas.sort(comparator);

//cria os pares
criarPares();

//embaralha as cartas
deck.sort(comparator);

//mostra a carta
mostrarDeck();

//funções--------------------------------------------------------------------------------------------------

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
  const carta = `<div data-test="card" class="card" onclick="virarCarta(this)">
      <div class="tras back-face face">
           <img data-test="face-up-image" src="${tipo}">
      </div>
      <div class="frente face">
          <img data-test="face-down-image" src="./imagens/back.png">
      </div>
  </div>
  `;
  return carta;
}

//virar carta
function virarCarta(carta){

    const front=carta.querySelector('.frente');
    front.classList.add('rotateFront');
    const back=carta.querySelector('.tras');
    back.classList.add('rotateBack');

    compararCartas(carta);
}

//comparar
function compararCartas(carta) {
    cartasComparadas.push(carta);
    const numCartasComparadas = cartasComparadas.length;
  
    if (numCartasComparadas === 2) {
      jogadas++;
  
      const carta1 = cartasComparadas[0];
      const carta2 = cartasComparadas[1];
  
      if (carta1.innerHTML === carta2.innerHTML) {
        cont++;
        concluir();
      } else {
        cartaVirada.push(carta1, carta2);
        setTimeout(() => {
          carta1.querySelector('.frente').classList.remove('rotateFront');
          carta1.querySelector('.tras').classList.remove('rotateBack');
          carta2.querySelector('.frente').classList.remove('rotateFront');
          carta2.querySelector('.tras').classList.remove('rotateBack');
          cartaVirada = [];
        }, 1000);
      }
  
      cartasComparadas = [];
    }
  }

//mostrar cartas
function mostrarDeck(){
    for(i=0; i<numDeCartas; i++){
        jogo.innerHTML+=deck[i];
    }
}

//mostrar mensagem ao ganhar
function concluir(){
    if(numDeCartas==cont*2){
        jogadas=jogadas*2;
        alert (`Você ganhou em ${jogadas} jogadas!`);
    }
}

let cartas=null;
let mod = null;

do{
    cartas=prompt("Quantas cartas você quer?");
    mod = cartas%2;
} while(((cartas<1)||(cartas>14))||((mod)!==0))

let contador=0;

while(contador<cartas){
    let main=document.querySelector('.main');
    main.innerHTML= main.innerHTML + `
         <div class="card" onclick="virarCard()">
            <div class="tras back-face face">
                Verso
            </div>
            <div class="frente front-face face">
                <img src="./imagens/back.png">
            </div>
        </div>
    `;
    contador++;
}
/*function virarCard(){
    const front=document.querySelector('.frente');
    console.log(front);
    front.classList.toggle('rotate2');
    const back=document.querySelector('.tras');
    back.classList.toggle('rotate1');
    console.log(back);
}*/
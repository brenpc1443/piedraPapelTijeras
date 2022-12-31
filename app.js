const btnStone = document.querySelector(".btn-stone");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");
const btnAgain = document.querySelector(".again");
const gameCPU = document.querySelector(".game-cpu");
const gamePLAYER = document.querySelector(".game-player");
const result = document.querySelector(".result");
const resultWL = document.querySelector(".result-wl");


let turnPlayer = 0;
let clickBtnPlayer = 0;
let resultGame = "";

btnStone.addEventListener("click", () => clickBtn(btnStone));
btnPaper.addEventListener("click", () => clickBtn(btnPaper));
btnScissors.addEventListener("click", () => clickBtn(btnScissors));
btnAgain.addEventListener("click", () => clickBtnAgain());

function clickBtn(bttn) {
  if (turnPlayer == 0) {
    switch (bttn) {
      case btnStone:
        clickBtnPlayer = 1;
        gamePLAYER.style.backgroundImage = "url(./imagenes/img/piedra.png)";
        break;
      case btnPaper:
        clickBtnPlayer = 2;
        gamePLAYER.style.backgroundImage = "url(./imagenes/img/papel.png)";
        break;
      case btnScissors:
        clickBtnPlayer = 3;
        gamePLAYER.style.backgroundImage = "url(./imagenes/img/tijera.png)";
        break;
    }
    turnPlayer = 1;
    moveCPU();
  }
}

function clickBtnAgain(){
  result.classList.add("inactive");
  btnAgain.classList.add("inactive");
  turnPlayer = 0;
  clickBtnPlayer = 0;
  resultGame = "";
  gameCPU.style.backgroundImage = "url()";
  gamePLAYER.style.backgroundImage = "url()";
}

const moveCPU = () => {
  const change = changeImage();
  let second = 0;
  for (i = 0; i < 7; i++) {
    second = second + 400;
    setTimeout(() => {
      change.next();
    }, second);
  }
  setTimeout(() => {
    resultGame = choiceCPU();
    setTimeout(() => {
      end();
    }, 300);
  }, 3400);
};

function* changeImage() {
  gameCPU.style.backgroundImage = "url(./imagenes/img/piedra.png)";
  yield;
  gameCPU.style.backgroundImage = "url(./imagenes/img/tijera.png)";
  yield;
  gameCPU.style.backgroundImage = "url(./imagenes/img/papel.png)";
  yield;
  gameCPU.style.backgroundImage = "url(./imagenes/img/piedra.png)";
  yield;
  gameCPU.style.backgroundImage = "url(./imagenes/img/tijera.png)";
  yield;
  gameCPU.style.backgroundImage = "url(./imagenes/img/papel.png)";
  yield;
  gameCPU.style.backgroundImage = "url()";
}

const choiceCPU = () => {
  let num = 0;
  let hand = "";
  num = Number.parseInt(Math.random() * 10);

  if (num == 0){
    num++;
  }
  if(num == 1 || num == 2 || num == 3){
    hand = "piedra";
  }else if(num == 4 || num == 5 || num == 6){
    hand = "papel";
  }else if(num == 7 || num == 8 || num == 9){
    hand = "tijera";
  }

console.log(num);

  switch(hand){
    case "piedra":
      gameCPU.style.backgroundImage = "url(./imagenes/img/piedra.png)";
      if(clickBtnPlayer == 1){
        return "EMPATE";
      }else if(clickBtnPlayer == 3){
        return "PERDISTE";
      }
      break;
    case "papel":
      gameCPU.style.backgroundImage = "url(./imagenes/img/papel.png)";
      if(clickBtnPlayer == 2){
        return "EMPATE";
      }else if(clickBtnPlayer == 1){
        return "PERDISTE";
      }
      break;
    case "tijera":
      gameCPU.style.backgroundImage = "url(./imagenes/img/tijera.png)";
      if(clickBtnPlayer == 3){
        return "EMPATE";
      }else if(clickBtnPlayer == 2){
        return "PERDISTE"
      }
      break;
  }
  return "GANASTE";

};

const end = () => {
  result.classList.remove("inactive");
  btnAgain.classList.remove("inactive");
  resultWL.innerText = resultGame;
}
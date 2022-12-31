const btnStone = document.querySelector(".btn-stone");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");
const gameCPU = document.querySelector(".game-cpu");
const gamePLAYER = document.querySelector(".game-player");

let turnPlayer = 0;

btnStone.addEventListener("click", () => clickBtn(btnStone));
btnPaper.addEventListener("click", () => clickBtn(btnPaper));
btnScissors.addEventListener("click", () => clickBtn(btnScissors));

function clickBtn(bttn) {
  if (turnPlayer == 0) {
    switch (bttn) {
      case btnStone:
        gamePLAYER.style.backgroundImage = "url(./imagenes/img/piedra.png)";
        break;
      case btnPaper:
        gamePLAYER.style.backgroundImage = "url(./imagenes/img/papel.png)";
        break;
      case btnScissors:
        gamePLAYER.style.backgroundImage = "url(./imagenes/img/tijera.png)";
        break;
    }
    turnPlayer = 1;
    moveCPU();
  }
}

const moveCPU = () => {
  const change = changeImage();
  let second = 0;
  for(i = 0; i < 7; i++){
    second = second + 500;
    setTimeout(() => {
      change.next();
    }, second);
  }
};

function* changeImage() {
  gameCPU.style.backgroundImage = "url(./imagenes/img/piedra.png)";
  yield
  gameCPU.style.backgroundImage = "url(./imagenes/img/tijera.png)";
  yield
  gameCPU.style.backgroundImage = "url(./imagenes/img/papel.png)";
  yield
  gameCPU.style.backgroundImage = "url(./imagenes/img/piedra.png)";
  yield
  gameCPU.style.backgroundImage = "url(./imagenes/img/tijera.png)";
  yield
  gameCPU.style.backgroundImage = "url(./imagenes/img/papel.png)";
  yield
  gameCPU.style.backgroundImage = "url()";
}

const drawArea = document.querySelector(".draw-area");

function generateArea(squares = 16) {
  for (let i = 0; i < squares * squares; i++) {
    const division = document.createElement("div");
    division.style.height = 512 / squares + "px";
    division.style.width = 512 / squares + "px";
    drawArea.appendChild(division);
  }
}

function addElBtn() {
  const buttons = document.querySelectorAll(".btn");
  buttons[0].classList.add("btn-style");
  for (let k = 0; k < 2; k++) {
    buttons[k].addEventListener("click", function (e) {
      buttons.forEach((btn) => {
        btn.classList.remove("btn-style");
      });
      e.target.classList.add("btn-style");
    });
  }
}

let flag = 0;
let clicked = 0;
let color = "#000000";
let mflag = 0;
let eflag = 0;

window.addEventListener("mousedown", function () {
  mflag = 1;
  eflag = 1;
});

window.addEventListener("mouseup", function () {
  mflag = 0;
  eflag = 0;
});

function addEL(squares = 16) {
  const drawAreaElements = document.querySelectorAll(".draw-area div");
  for (let i = 0; i < squares * squares; i++) {
    drawAreaElements[i].addEventListener("mouseover", function () {
      if (flag === 0 && mflag === 1) {
        this.style.backgroundColor = color;
      } else if (flag === 1 && eflag === 1 && mflag == 0) {
        this.style.backgroundColor = "#ffffff";
      }
    });
  }
}

generateArea(16);
addEL(16);
addElBtn();

let input;

function handleClear() {
  drawArea.replaceChildren();
  generateArea(input);
  addEL(input);
}

function handleEraser() {
  eflag = 1;
  flag = 1;
  mflag = 0;
}

function handlePen() {
  flag = 0;
  eflag = 0;
}

let slider = document.getElementById("myRange");
let output = document.getElementById("slider-output");
output.innerHTML = slider.value + " x " + slider.value;

slider.oninput = function () {
  output.innerHTML = this.value + " x " + this.value;
  drawArea.replaceChildren();
  generateArea(this.value);
  addEL(this.value);
};

const picker = document.getElementById("inputcolor");
picker.oninput = function () {
  color = this.value;
};

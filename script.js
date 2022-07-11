const drawArea = document.querySelector(".draw-area");

function generateArea(squares = 16) {
  for (let i = 0; i < squares * squares; i++) {
    const division = document.createElement("div");
    division.style.height = 512 / squares + "px";
    division.style.width = 512 / squares + "px";
    drawArea.appendChild(division);
  }
  //   addEL(squares);
}

function addElBtn() {
  const buttons = document.querySelectorAll(".btn");
  buttons[1].classList.add("btn-style");
  for (let k = 0; k < 3; k++) {
    buttons[k].addEventListener("click", function (e) {
      buttons.forEach((btn) => {
        btn.classList.remove("btn-style");
      });
      e.target.classList.add("btn-style");
    });
  }
}

let flag = 0;

function addEL(squares = 16) {
  // addEventListener("onmousedown", mDown(this));
  const drawAreaElements = document.querySelectorAll(".draw-area div");
  for (let i = 0; i < squares * squares; i++) {
    drawAreaElements[i].addEventListener("mouseover", function () {
      if (flag === 0) {
        this.style.backgroundColor = "#000000";
      } else {
        this.style.backgroundColor = "#ffffff";
      }
    });
  }
  //   console.log(flag);
}

generateArea(16);
addEL(16);
addElBtn();

let input;

function handleInput() {
  input = prompt("Enter no of squares for the grid: ");
  drawArea.replaceChildren();
  generateArea(input);
  addEL(input);
}

function handleClear() {
  drawArea.replaceChildren();
  generateArea(input);
  addEL(input);
  addElBtn();
}

function handleEraser() {
  flag = 1;
}

function handlePen() {
  flag = 0;
}

// function addEL2() {
//     // addEventListener("onmousedown", mDown(this));
//     const drawAreaElements = document.querySelectorAll(".draw-area div");
//     for (let i = 0; i < 255; i++) {
//       drawAreaElements[i].addEventListener("mouseup", function () {
//       //   this.style.backgroundColor = '#000000';
//       flat = 0;
//       });
//     }
//     console.log(flag)
//   }
// addEL2();

// function mDown(obj) {
//   // obj.style.backgroundColor("#000000");
//   // obj.classList.add("active-state");
//   console.log(obj);
// }

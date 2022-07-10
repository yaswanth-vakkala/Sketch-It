const drawArea = document.querySelector(".draw-area");

function generateArea() {
  for (let i = 0; i < 16; i++) {
    for (let i = 0; i < 16; i++) {
      const division = document.createElement("div");
      drawArea.appendChild(division);
    }
  }
}

generateArea();

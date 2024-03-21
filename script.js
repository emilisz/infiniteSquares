function randomHexColor() {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
}

function changeColor(element) {
  element.style.backgroundColor = randomHexColor();
}

const appContainer = document.querySelector("#app");

appContainer.onclick = (e) => addNew(e.target);

function addNew(t) {
  if (!t) {
    return;
  }
  for (let i = 0; i < 4; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("cell");
    changeColor(newDiv);
    newDiv.onclick = () => addNew();
    t.appendChild(newDiv);
  }
}

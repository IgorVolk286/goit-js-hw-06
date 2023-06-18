function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  divCollection: document.querySelector("#boxes"),
  divControls: document.querySelector("#controls"),
  inputCounter: document.querySelector("#controls").firstElementChild,
  btnCreat: document.querySelector("#controls").children[1],
  btnDestroy: document.querySelector("#controls").lastElementChild,
};
console.log(refs.inputCounter);

refs.inputCounter.addEventListener("input", getAmound);

function getAmound(event) {
  event.currentTarget.value;
  console.log(event.currentTarget.value);
}
refs.btnCreat.addEventListener("click", createBoxes);

function createBoxes() {
  let quantityDir = refs.inputCounter.value;
  let stepDirWH = 10;

  for (let i = 0; i < quantityDir; i += 1) {
    let dir = document.createElement("div");
    stepDirWH += 10;
    dir.classList.add("dir");
    dir.style.backgroundColor = getRandomHexColor();

    dir.style.height += `${stepDirWH}px`;
    dir.style.width += `${stepDirWH}px`;

    refs.divCollection.append(dir);

    console.log(document.createElement("div").style);
  }
}

refs.btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  refs.divCollection.innerHTML = " ";
}

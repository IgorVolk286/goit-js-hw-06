const refs = {
  spanEl: document.querySelector("#name-output"),
  inputEl: document.querySelector("#name-input"),
};
// console.log(refs);

refs.inputEl.addEventListener("input", onInputElInput);

function onInputElInput(event) {
  event.preventDefault();

  if (!event.currentTarget.value) {
    refs.spanEl.textContent = "Anonymous";
  } else {
    refs.spanEl.textContent = event.currentTarget.value;
  }
}

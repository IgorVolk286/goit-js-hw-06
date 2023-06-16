const refs = {
  inputRange: document.querySelector("#font-size-control"),
  spanRange: document.querySelector("#text"),
};

// console.log(refs.spanRange.style);

refs.inputRange.addEventListener("input", changeSpanSize);
// const stepSizeSpan = 1;
function changeSpanSize(event) {
  console.log(event.currentTarget.value);

  refs.spanRange.style.fontSize = ` ${event.currentTarget.value}px`;

  console.log(refs.spanRange.style.fontSize);
}

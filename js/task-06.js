const input = document.querySelector("#validation-input");
console.log(input);

input.addEventListener("blur", InputBlurLose);

const dataLength = Number(input.getAttribute("data-length"));
console.log(dataLength);

function InputBlurLose(event) {
  event.currentTarget.value.length;
  // console.log(event.currentTarget.value.length);

  if (event.currentTarget.value.length === dataLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

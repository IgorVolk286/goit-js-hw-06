const input = document.querySelector("#validation-input");
console.log(input);

const dataLength = Number(input.getAttribute("data-length"));
console.log(dataLength);

input.addEventListener("blur", InputBlurLose);

function InputBlurLose(event) {
  

  console.log(event.currentTarget.value.length);

  if (
    event.currentTarget.value.length >= dataLength &&
    input.classList.contains("invalid")
  ) {
    input.classList.replace("invalid", "valid");
  } else if (event.currentTarget.value.length >= dataLength) {
    input.classList.add("valid");
  } else if (
    event.currentTarget.value.length < dataLength &&
    input.classList.contains("valid")
  ) {
    input.classList.remove("valid", "invalid");
  } else if (event.currentTarget.value.length < dataLength) {
    input.classList.add("invalid");
  }
}

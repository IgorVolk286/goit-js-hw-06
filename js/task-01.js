const categorysEl = document.querySelectorAll(".item");
console.log("Number of categories:", categorysEl.length);

categorysEl.forEach((element, ind) => {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.children[1].children.length);
});

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const items = [];
ingredients.forEach((text) => {
  const li = document.createElement("li");
  li.textContent = text;
  li.classList.add("item");
  items.push(li);
});

// console.log(items);

ingredientsEl.append(...items);
console.dir(ingredientsEl);

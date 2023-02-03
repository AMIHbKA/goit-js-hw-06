const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listItems = ingredients.map((element) => {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("item");
  listItemEl.textContent = element;
  return listItemEl;
});

const listRef = document.getElementById("ingredients");
listRef.append(...listItems);

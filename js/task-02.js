const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeListItems = (arr) => {
  return arr.map((element) => {
    const listItemEl = document.createElement("li");
    listItemEl.classList.add("item");
    listItemEl.textContent = element;
    return listItemEl;
  });
};

const listRef = document.getElementById("ingredients");
const listItemsEl = makeListItems(ingredients);
listRef.append(...listItemsEl);

const listCategoriesEl = document.getElementById('categories');



console.log(listCategoriesEl.childElementCount);

// console.log(`Number of categories: ${listCategoriesEl.children.length}`);

const itemCategoriesListEl = listCategoriesEl.querySelectorAll('.item');
console.dir(itemCategoriesListEl)
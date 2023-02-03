const listCategoriesEl = document.getElementById('categories');

console.log(`Number of categories: ${listCategoriesEl.childElementCount}`);

const CategoriesListItemRef = listCategoriesEl.querySelectorAll('.item');

const CategoriesListItem = ref => {
    ref.forEach(element => {
        const elementHeaderTextRef = element.querySelector('h2').textContent
        const elementListItemCount = element.querySelectorAll('li').length
        console.log(`Category: ${elementHeaderTextRef}\nElements: ${elementListItemCount}`);
    });
}

CategoriesListItem(CategoriesListItemRef);

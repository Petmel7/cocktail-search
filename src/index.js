const refs = {
    form: document.querySelector('#form'),
    input: document.querySelector('#search'),
    container: document.querySelector('.container')
}

const handlerSubmit = (e) => {
    e.preventDefault();
    const value = refs.input.value;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
     .then(response => response.json())
     .then(coctails => renderCollection(coctails.drinks))
     .catch(err => console.log(err))
}

function createItem({ strDrinkThumb, strDrink, strInstructions }) {
    const article = `
        <article>
            <img src="${strDrinkThumb}" 
            alt="${strDrink}">
            <p>${strInstructions}</p>
        </article>`
    
    refs.container.insertAdjacentHTML("beforeend", article);
}

function renderCollection(arr) {
    arr.forEach(el =>  createItem(el));
}

refs.form.addEventListener('submit', handlerSubmit);
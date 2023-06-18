import "./style.css";
import axios from 'axios';

const refs = {
    form: document.querySelector('#form'),
    input: document.querySelector('#search'),
    jsmarkup: document.querySelector('.jsmarkup')
}

const handlerSubmit = (e) => {
    e.preventDefault();
    const value = refs.input.value;
    // fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
        .theh(result => console.log(result))
        // .then(response => response.json())
        // .then(coctails => renderCollection(coctails.drinks))
        // .catch(err => console.log(err))
}

function createItem({ strDrinkThumb, strDrink }) {
    const article = `
        <li>
            <img src="${strDrinkThumb}" 
            alt="${strDrink}">
            <p>${strDrink}</p>
        </li>`
    
    refs.jsmarkup.insertAdjacentHTML("beforeend", article);
}

function renderCollection(arr) {
    arr.forEach(el =>  createItem(el));
}

refs.form.addEventListener('submit', handlerSubmit);
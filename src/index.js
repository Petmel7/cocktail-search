import "./style.css";
import axios from 'axios';

// const refs = {
//     form: document.querySelector('#form'),
//     input: document.querySelector('#search'),
//     jsmarkup: document.querySelector('.jsmarkup')
// }

// const handlerSubmit = (e) => {
//     e.preventDefault();
//     const value = refs.input.value;
//     //! Код через fetch
//     // fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`
//         // .then(response => response.json())
//         // .then(coctails => renderCollection(coctails.drinks))
//         // .catch (err => { console.log(err) })
//     //! Код через бібліотеку axios
//     axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
//     .then(response => {
//         renderCollection(response.data.drinks);
//         clearInput();
//     })
//     .catch(error => {
//         console.log(error);
//     });
// }

// function createItem({ strDrinkThumb, strDrink }) {
//     const li = document.createElement('li'); //
//     li.innerHTML = `
//         <li>
//             <img src="${strDrinkThumb}"
//             alt="${strDrink}">
//             <p>${strDrink}</p>
//         </li>`
    
//     // refs.jsmarkup.insertAdjacentHTML("beforeend", article);
//     refs.jsmarkup.appendChild(li); //
// }

// function renderCollection(arr) {
//     refs.jsmarkup.innerHTML = ''; // Очищаємо контейнер перед відображенням нових результатів
//     arr.forEach(el =>  createItem(el));
// }

// function clearInput() {
//     refs.input.value = ''; // Очищаємо поле вводу
// }

// refs.form.addEventListener('submit', handlerSubmit);



const refs = {
    form: document.querySelector('#form'),
    input: document.querySelector('#search'),
    jsmarkup: document.querySelector('.jsmarkup')
}

let currentPage = 1;

const gitHandlerSubmit = (e) => {
    e.preventDefault();
    const value = refs.input.value;
    
    axios.get(`https://api.github.com/search/users?q=${value}&client_id=bc979564c898738507ac&client_secret=91ea2a149d384989e086b6bfd5e6132ac830005c&page=${currentPage}`)
        .then(response => {
            renderGitCollection(response.data.items);
            clearInput();
        })
        .theh(() => currentPage++)

        .catch(error => {
            console.log(error);
    });
}

function createGitItem({ avatar_url, login }) {
    const li = document.createElement('li');
    li.innerHTML = `
        <img src="${avatar_url}" 
        alt="${login}">
        <p>${login}</p>
    `;
    
    refs.jsmarkup.appendChild(li);
}

function renderGitCollection(arr) {
    refs.jsmarkup.innerHTML = ''; // Очищаємо контейнер перед відображенням нових результатів
    arr.forEach(el => createGitItem(el));
}

function clearInput() {
    refs.input.value = ''; // Очищаємо поле вводу
}

refs.form.addEventListener('submit', gitHandlerSubmit);

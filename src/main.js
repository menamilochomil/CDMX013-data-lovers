//import { example } from './data.js';

import data from './data/harrypotter/harryPotter.js';

function showSpell(item) {
  const container = document.createElement('div')
  let htmlModal = ` 
        <div id="spell-modal${item.id}" class="spell-modal">
            <div class="spell-content">
                <span class= "spell-close" id="spell-close${item.id}">&times;</span>
                <h4 class="spell-name">Name: ${item.name}</h4>
                <p class="spell-type">Spell Type: ${item.spell_type}</p>
                <p class="spell-description">Descripción: ${item.description}</p><br>
            </div>
        </div>
    <button id="btn-spell${item.id}" class="btn-spell-name">${item.name}</button>
    `;
  container.innerHTML = htmlModal

  container.querySelector(`#btn-spell${item.id}`).addEventListener('click', (e) => {
    e.preventDefault()
    let modal = document.getElementById(`spell-modal${item.id}`);
    modal.style.display = "block";

    document.querySelector(`#spell-close${item.id}`).addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  })
  return container
}
data.spells.map((item) => {
  document.getElementById("spells").appendChild(showSpell(item))
});

function showBook(item) {
  const container = document.createElement('div')
  let htmlModal = ` 
        <div id="book-modal${item.id}" class="book-modal">
            <div class="book-content">
                <span class= "book-close" id="book-close${item.id}">&times;</span>
                <h4 class="book-name">Name: ${item.title}</h4>
                <p class="book-release-day">Spell Type: ${item.releaseDay}</p>
                <p class="book-description">Description: ${item.description}</p><br>
            </div>
        </div>
    <button id="btn-book${item.id}" class="btn-book-name">${item.title}</button>
    `;
  container.innerHTML = htmlModal

  container.querySelector(`#btn-book${item.id}`).addEventListener('click', (e) => {
    e.preventDefault()
    let modal = document.getElementById(`book-modal${item.id}`);
    modal.style.display = "block";

    document.querySelector(`#book-close${item.id}`).addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  })
  return container
}
data.books.map((item) => {
  document.getElementById("books").appendChild(showBook(item))
});
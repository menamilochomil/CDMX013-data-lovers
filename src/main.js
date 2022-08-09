//import { example } from './data.js';

import data from './data/harrypotter/harryPotter.js';



















































function showPotions(item) {
  const container = document.createElement('div')

  let htmln = ` <div id="potions-container${item.id}" class="potions-container">
  <div class="potions-container1">
  <span class= "potions-close" id="potions-close${item.id}">&times;</span>
  <h4 class="potions-name">Name: ${item.name}</h4>
  <p class="potions-description">Puntuación: ${item.description}</p><br>
  </div>
  </div>
  <button id="btn-potions${item.id}" class="btn-potions">${item.name}</button>
  `;

  container.innerHTML = htmln
  container.querySelector(`#btn-potions${item.id}`).addEventListener('click', (e) => {
    e.preventDefault()

    let modal = document.getElementById(`potions-container${item.id}`);
    modal.style.display = "block";

    document.getElementById(`potions-close${item.id}`).addEventListener("click", function() {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      } 
    });
  });

  return container
}

data.potions.map((item) => {
  document.getElementById("potions").appendChild(showPotions(item))
});

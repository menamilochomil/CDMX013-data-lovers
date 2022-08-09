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


function showSpell (item) {
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
    container.innerHTML=htmlModal
    
    container.querySelector(`#btn-spell${item.id}`).addEventListener('click', (e)=>{
      e.preventDefault()
      let modal = document.getElementById(`spell-modal${item.id}`);
      modal.style.display = "block";
      
      document.querySelector(`#spell-close${item.id}`).addEventListener("click", function() {
        modal.style.display ="none";
      });

      window.addEventListener("click", function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      });
    })
     return container
      }
  data.spells.map((item)=>{
    document.getElementById("spells").appendChild(showSpell(item))
   });

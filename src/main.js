//import { example } from './data.js';

import data from './data/harrypotter/harryPotter.js';



function showPotions (item) {
  const container = document.createElement('div')

  let htmln = ` <div id="potions-container${item.id}" class="potions-container">
  <div class="potions-container1">
  <span class= "potions-close">&times;</span>
  <h4 class="potions-name">Name: ${item.name}</h4>
  <p class="potions-description">Puntuación: ${item.description}</p><br>
  </div>
  </div>
  <button id="btn-potions${item.id}">${item.name}</button>
  `;
  container.innerHTML=htmln
  container.querySelector(`#btn-potions${item.id}`).addEventListener('click', (e)=>{
    e.preventDefault()
    
    let modal = document.getElementById(`potions-container${item.id}`);
    modal.style.display = "block";
    window.addEventListener("click", function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  })
   return container
    }
data.potions.map((item)=>{
  document.getElementById("potions").appendChild( showPotions(item))
 });

//I need to add a forEach to create a loop for passing the entire array in the functions below
// Get the modal




// Get the <span> element that closes the modal
let span = document.getElementsByClassName("potions-close")[0];

// When the user clicks the button, open the modal 


// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function() {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it

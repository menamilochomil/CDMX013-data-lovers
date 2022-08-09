//import { example } from './data.js';

import data from './data/harrypotter/harryPotter.js';

data.potions.map(showPotions);
function showPotions (item) {
   return document.getElementById("potions").innerHTML += ` <div id="potions-container">
            <span class= "potions-close">&times;</span>
            <h4 class="potions-name">Name: ${item.name}</h4>
            <p class="potions-content">Puntuación: ${item.description}</p><br>
            </div>
            <button id="btn-potions">${item.name}</button>
            `;
    }

//I need to add a forEach to create a loop for passing the entire array in the functions below
// Get the modal
let modal = document.getElementById("potions-container");

// Get the button that opens the modal
let btn = document.getElementById("btn-potions");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("potions-close")[0];

// When the user clicks the button, open the modal 
btn.addEventListener("click", function() {
    modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function() {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
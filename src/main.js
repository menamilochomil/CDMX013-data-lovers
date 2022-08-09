//import { example } from './data.js';

import data from './data/harrypotter/harryPotter.js';


const dataPotions = data.potions;

dataPotions.map(showPotions);


function showPotions (item) {
   return document.getElementById("potions").innerHTML += (` <div class="potions-container">
            <h4 class="potions-name">${item.name}</h4>
            <p class="potions-description">Puntuación: ${item.description}</p><br>
            </div>
            `);
    }
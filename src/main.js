//import { example } from './data.js';

import data from './data/harrypotter/harryPotter.js';

const dataSpells = data.spells;
for (let i=0; i<dataSpells.length; i++) {
   let spell = document.createElement("p");
   spell.innerHTML = JSON.stringify(dataSpells[i]);
   document.getElementById("spells").appendChild(spell);
}


//window.addEventListener("load", );
/*function () {
    //forEach para que itere sobre cada objeto de spells
    //que cree un <p> por cada objeto de spells
    //imprima en <div class="spells"> con innerHTML

}*/


    



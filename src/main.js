//import { example } from './data.js';

import data from './data/harrypotter/harryPotter.js';

const dataSpells = data.spells;

for (let i=0; i<dataSpells.length; i++) {
    let spell = document.createElement("p");
    spell.innerHTML = JSON.stringify(dataSpells[i].name);
    document.getElementById("spells").appendChild(spell);
}


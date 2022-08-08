//import { example } from './data.js';

import data from './data/harrypotter/harryPotter.js';

const dataSpells = data.spells;


for (let i=0; i<dataSpells.length; i++) {
    //obtain the spell name from the database
    let spellName = document.createElement("button");
    spellName.setAttribute("class", "spell-name");
    spellName.innerHTML = dataSpells[i].name;
    // prints the button in the grid
    document.getElementById("spells").append(spellName);
    
    //create a div element for the modal
    const spellModal = document.createElement("div");
    spellModal.setAttribute("class", "spell-modal")
    //create a div element for the modal content
    const spellContent = document.createElement("div");
    spellContent.setAttribute("class", "spell-content");
    //create a span element to close the modal
    const closeSpell = document.createElement("span")
    closeSpell.setAttribute("class", "close-spell")
    closeSpell.textContent = "&times;"

    //obtains the spell_type from the database
    let spellType = document.createElement("p");
    spellType.setAttribute("class", "spell-type");
    spellType.innerHTML = dataSpells[i].spell_type;
    //obtains the spell description from the database
    let spellDescription = document.createElement("p");
    spellDescription.setAttribute("class", "spell-description")
    spellDescription.innerHTML = dataSpells[i].description;

    spellContent.append(closeSpell, spellType, spellDescription);
    spellModal.appendChild(spellContent);    
}

spellName.onclick = function () {
    spellModal.style.display = "block"
}


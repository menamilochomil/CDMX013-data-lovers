//import { example } from './data.js';

import data from './data/harrypotter/harryPotter.js';

const dataSpells = data.spells;


for (let i = 0; i < dataSpells.length; i++) {
    //obtain the spell name from the database
    var spellName = document.createElement("button");
    spellName.setAttribute("id", "spell-name");
    spellName.innerHTML = dataSpells[i].name;
    // prints the button in the grid
    document.getElementById("spells").append(spellName);

    //create a div element for the modal
    var spellModal = document.createElement("div");
    spellModal.setAttribute("id", "spell-modal");
    //create a div element for the modal content
    var spellContent = document.createElement("div");
    spellContent.setAttribute("id", "spell-content");
    //create a span element to close the modal
    var closeSpell = document.createElement("span");
    closeSpell.setAttribute("id", "close-spell");
    closeSpell.textContent = "&times;";

    //obtains the spell_type from the database
    let spellType = document.createElement("p");
    spellType.setAttribute("id", "spell-type");
    spellType.innerHTML = dataSpells[i].spell_type;
    //obtains the spell description from the database
    let spellDescription = document.createElement("p");
    spellDescription.setAttribute("id", "spell-description")
    spellDescription.innerHTML = dataSpells[i].description;

    spellContent.append(closeSpell, spellType, spellDescription);
    spellModal.append(spellContent);
    document.getElementById("spells").appendChild(spellModal);
}

spellName.addEventListener("click", function() {
    spellModal.style.display = "block"
})
closeSpell.addEventListener("click", function () {
    spellModal.style.display = "none"
})
window.addEventListener("click", function(event) {
    if (event.target == spellModal) {
        spellModal.style.display = "none"
    }
})
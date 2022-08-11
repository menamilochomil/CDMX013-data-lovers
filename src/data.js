import data from './data/harrypotter/harryPotter.js';

export const charactersHufflepuff = data.characters.filter(function (selectedHouse) {
  return selectedHouse.house === "Hufflepuff";
});

export const charactersRavenclaw = data.characters.filter(function (selectedHouse) {
  return selectedHouse.house === "Ravenclaw";
});

export const charactersGryffindor = data.characters.filter(function (selectedHouse) {
  return selectedHouse.house === "Gryffindor";
});

export const charactersSlytherin = data.characters.filter(function (selectedHouse) {
  return selectedHouse.house === "Slytherin";
});

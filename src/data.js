// estas funciones son de ejemplo
import data from './data/harrypotter/harryPotter.js';
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
export const filterHuman= data.characters.filter(item => item.species === "Human");
export const filterNotHuman= data.characters.filter(item => item.species !== "Human");

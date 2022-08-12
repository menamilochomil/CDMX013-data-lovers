// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
export const filterHuman= (arrHuman,species)=>{
  return arrHuman.filter((item) => item.species === species)
}
export const filterNotHuman= (arrHuman,species)=>{
  return arrHuman.filter((item) => item.species !== species)
}

//export const humanSort= data.characters.name.sort();

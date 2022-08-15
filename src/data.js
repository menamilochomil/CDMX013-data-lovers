// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const charactersFilterHouses = function (arrData, house) {
  let filterData = arrData.filter(function (element) {
    return element.house === house;
  });
  return filterData;
}

export const filterHuman= (arrHuman,species)=>{
  return arrHuman.filter((item) => item.species === species)
}
export const filterNotHuman= (arrHuman,species)=>{
  return arrHuman.filter((item) => item.species !== species)
}

export const sortAZ= (arrData)=> arrData.sort((a, b) => {
    if(a.name< b.name){ 
      return -1
    } if (a.name> b.name){
      return 1
    }
      return 0
  });

  export const sortZA= (arrData)=> arrData.sort((a, b) => {
    if(a.name< b.name){ 
      return 1
    } if (a.name> b.name){
      return -1
    }
      return 0
  });
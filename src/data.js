export const charactersFilterHouses = (arrData, house) => {

  return arrData.filter(function (element) {

    return element.house === house;
    // if (selectedHouse.house === "Hufflepuff") {
    //   return selectedHouse.house === "Hufflepuff";
    // } else if (selectedHouse.house === "Ravenclaw") {
    //   return selectedHouse.house === "Ravenclaw";
    // } else if (selectedHouse.house === "Gryffindor") {
    //   return selectedHouse.house === "Gryffindor";
    // } else {
    //   return selectedHouse.house === "Slytherin";
    // }
  });
}

// export const charactersHufflepuff = dataCharacters.filter(function (selectedHouse) {
//   return selectedHouse.house === "Hufflepuff";
// });

// export const charactersRavenclaw = dataCharacters.filter(function (selectedHouse) {
//   return selectedHouse.house === "Ravenclaw";
// });

// export const charactersGryffindor = dataCharacters.filter(function (selectedHouse) {
//   return selectedHouse.house === "Gryffindor";
// });

// export const charactersSlytherin = dataCharacters.filter(function (selectedHouse) {
//   return selectedHouse.house === "Slytherin";
// });

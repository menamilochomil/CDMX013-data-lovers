export const charactersFilterHouses = function (arrData, house) {
  let filterData = arrData.filter(function (element) {
    return element.house === house;
  });
  return filterData;
}

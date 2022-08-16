import { charactersFilterHouses, filterHuman, filterNotHuman, sortAZ, sortZA } from '../src/data.js';
//Filter test
describe('charactersFilterHouses', () => {
  const data= [{"house": "Slytherin"},{"house": "Gryffindor"}]
  it('should filter by houses', () => {
    expect(charactersFilterHouses(data.house, "Gryffindor").toStricEqual([{ "house": "Gryffindor"}]))
  });
  it ('is a function', () => {
    expect(typeof charactersFilterHouses).toBe('function');

  });
  /* it ('is a new array', () => {
    expect(charactersFilterHouses([
      {
    "name": "Fat Friar",
    "house": "Hufflepuff"},{
    "name": "Peregrine Derrick",
    "house": "Slytherin"}
  ], {"house":"Hufflepuff"} ).toContain([{
      "name": "Fat Friar",
      "house": "Hufflepuff"}]))
  }); */
});

describe('filterHuman', () => {
  const data= [{"species": "Human"},{"species": "Ghost"}]
  it('should filter by species', () => {
    expect(filterHuman(data,"Human").toStricEqual([{ "species": "Human"}]))
  });
  it('is a function', () => {
    expect(typeof filterHuman).toBe('function');
  });
});


describe('filterNotHuman', () => {
  it('is a function', () => {
    expect(typeof filterNotHuman).toBe('function');
  });
});

//order test: to order and 
describe('sortAZ', () => {
  it('should return A to Z order ', () => {
    expect(sortAZ([{"name": "James Potter I" },
    {"name": "African prince"},
    { "name": "Harry Potter"}])).toEqual(
      [{ "name": "African prince"},
        {"name": "Harry Potter" },
    {"name": "James Potter I"}])
  });
 it('should not be an empty array', () => {
   expect(() => sortAZ()).toThrow(TypeError)
    });
});

describe('sortZA', () => {
  it('should return Z to A order ', () => {
    expect(sortZA([{"name": "James Potter I"},
    { "name": "African prince"}, {"name": "Zacharias Smith's father"}])).toEqual([
      { "name": "Zacharias Smith's father"},
      {"name": "James Potter I"},
    {"name": "African prince"}
    ])
  });
  it('should not be an empty array', () => {
    expect(() => sortAZ()).toThrow(TypeError)
  });
});
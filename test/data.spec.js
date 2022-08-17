import { charactersFilterHouses, filterHuman, filterNotHuman, sortAZ, sortZA } from '../src/data.js';
//Filter test
describe('charactersFilterHouses', () => {
  const data= [{"house": "Slytherin"},{"house": "Gryffindor"}]
  it('should filter characters by houses', () => {
    expect(charactersFilterHouses(data, "Gryffindor")).toHaveLength(1)
  });
  it ('is a function', () => {
    expect(typeof charactersFilterHouses).toBe('function');
  });
  it('should filter by houses NOT', () => {
    expect(filterHuman(data,"Gryffindor")).not.toHaveLength(2)
  });
});

describe('filterHuman', () => {
  const data= [{"species": "Human"},{"species": "Ghost"}]
  it('should filter by species', () => {
    expect(filterHuman(data, "Human")).toHaveLength(1)
  });
  it('is a function', () => {
    expect(typeof filterHuman).toBe('function');
  });
  it('should filter by species NOT', () => {
    expect(filterHuman(data,"Human")).not.toHaveLength(2)
  });
});


describe('filterNotHuman', () => {
  const data= [{"species": "Human"},{"species": "Ghost"}]
  it('should filter by species', () => {
    expect(filterNotHuman(data,"Ghost")).toHaveLength(1)
  });
  it('is a function', () => {
    expect(typeof filterNotHuman).toBe('function');
  });
  it('should filter by species NOT', () => {
    expect(filterNotHuman(data,"Ghost")).not.toHaveLength(2)
  });
});

//order test: to order and 
describe('sortAZ', () => {
  it('should return A to Z order ', () => {
    expect(sortAZ([{"name": "James Potter I" },
    {"name": "African prince"},
    { "name": "Harry Potter"},
    { "name": "Harry Potter"}])).toEqual(
      [{ "name": "African prince"},
        {"name": "Harry Potter" },{ "name": "Harry Potter"},
    {"name": "James Potter I"}])
  });
 it('should not be an empty array', () => {
   expect(() => sortAZ()).toThrow(TypeError)
    });
});

describe('sortZA', () => {
  it('should return Z to A order ', () => {
    expect(sortZA([{"name": "James Potter I"},{"name": "James Potter I"},
    { "name": "African prince"}, {"name": "Zacharias Smith's father"}])).toEqual([
      { "name": "Zacharias Smith's father"},
      {"name": "James Potter I"},{"name": "James Potter I"},
    {"name": "African prince"}
    ])
  });
  it('should not be an empty array', () => {
    expect(() => sortAZ()).toThrow(TypeError)
  });
});
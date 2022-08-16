import { charactersFilterHouses, filterHuman, filterNotHuman, sortAZ, sortZA } from '../src/data.js';

describe('charactersFilterHouses', () => {
  it ('is a function', () => {
    expect(typeof charactersFilterHouses).toBe('function');
  });
});

describe('filterHuman', () => {
  it('is a function', () => {
    expect(typeof filterHuman).toBe('function');
  });
});


describe('filterNotHuman', () => {
  it('is a function', () => {
    expect(typeof filterNotHuman).toBe('function');
  });
});


describe('sortAZ', () => {
  it('should return A to Z order ', () => {
    expect(sortAZ([{
      "id": 327,
      "name": "James Potter I",
      "birth": "27 March, 1960",
      "death": "31 October, 1981 (aged 21)",
      "species": "Human",
      "ancestry": "Pure-blood",
      "gender": "Male",
      "hair_color": "Jet-black",
      "eye_color": "Hazel",
      "wand": "11\", Mahogany, unknown core",
      "patronus": "Stag",
      "house": "Gryffindor",
      "associated_groups": [
        "Potter family",
        "Evans family",
        "Hogwarts School of Witchcraft and Wizardry",
        "Marauders",
        "Gryffindor",
        "Gryffindor Quidditch team",
        "Order of the Phoenix"
      ],
      "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
    },
    {
      "id": 3,
      "name": "African prince",
      "birth": null,
      "death": null,
      "species": "Human",
      "ancestry": "Muggle-born or half-blood (possibly)",
      "gender": "Male",
      "hair_color": null,
      "eye_color": null,
      "wand": null,
      "patronus": null,
      "house": null,
      "associated_groups": ["Africa"],
      "books_featured_in": [1]
    },
    {
      "id": 326,
      "name": "Harry Potter",
      "birth": "31 July, 1980",
      "death": null,
      "species": "Human",
      "ancestry": "Half-blood",
      "gender": "Male",
      "hair_color": "Jet-black",
      "eye_color": "Bottle green",
      "wand": "11\", Holly, phoenix feather",
      "patronus": "Stag",
      "house": "Gryffindor",
      "associated_groups": [
        "Potter family",
        "Weasley family",
        "Albus Dumbledore",
        "Dumbledore's Army",
        "Order of the Phoenix",
        "Hogwarts School of Witchcraft and Wizardry",
        "Gryffindor",
        "Gryffindor Quidditch team",
        "Slug Club",
        "British Ministry of Magic",
        "Auror Office",
        "Department of Magical Law Enforcement",
        "S.P.E.W."
      ],
      "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
    }])).toEqual([{
      "id": 3,
      "name": "African prince",
      "birth": null,
      "death": null,
      "species": "Human",
      "ancestry": "Muggle-born or half-blood (possibly)",
      "gender": "Male",
      "hair_color": null,
      "eye_color": null,
      "wand": null,
      "patronus": null,
      "house": null,
      "associated_groups": ["Africa"],
      "books_featured_in": [1]
    },
    {
      "id": 326,
      "name": "Harry Potter",
      "birth": "31 July, 1980",
      "death": null,
      "species": "Human",
      "ancestry": "Half-blood",
      "gender": "Male",
      "hair_color": "Jet-black",
      "eye_color": "Bottle green",
      "wand": "11\", Holly, phoenix feather",
      "patronus": "Stag",
      "house": "Gryffindor",
      "associated_groups": [
        "Potter family",
        "Weasley family",
        "Albus Dumbledore",
        "Dumbledore's Army",
        "Order of the Phoenix",
        "Hogwarts School of Witchcraft and Wizardry",
        "Gryffindor",
        "Gryffindor Quidditch team",
        "Slug Club",
        "British Ministry of Magic",
        "Auror Office",
        "Department of Magical Law Enforcement",
        "S.P.E.W."
      ],
      "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
    },
    {
      "id": 327,
      "name": "James Potter I",
      "birth": "27 March, 1960",
      "death": "31 October, 1981 (aged 21)",
      "species": "Human",
      "ancestry": "Pure-blood",
      "gender": "Male",
      "hair_color": "Jet-black",
      "eye_color": "Hazel",
      "wand": "11\", Mahogany, unknown core",
      "patronus": "Stag",
      "house": "Gryffindor",
      "associated_groups": [
        "Potter family",
        "Evans family",
        "Hogwarts School of Witchcraft and Wizardry",
        "Marauders",
        "Gryffindor",
        "Gryffindor Quidditch team",
        "Order of the Phoenix"
      ],
      "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
    }])
  });
});

describe('sortZA', () => {
  it('should return Z to A order ', () => {
    expect(sortZA([{
      "id": 327,
      "name": "James Potter I",
      "birth": "27 March, 1960",
      "death": "31 October, 1981 (aged 21)",
      "species": "Human",
      "ancestry": "Pure-blood",
      "gender": "Male",
      "hair_color": "Jet-black",
      "eye_color": "Hazel",
      "wand": "11\", Mahogany, unknown core",
      "patronus": "Stag",
      "house": "Gryffindor",
      "associated_groups": [
        "Potter family",
        "Evans family",
        "Hogwarts School of Witchcraft and Wizardry",
        "Marauders",
        "Gryffindor",
        "Gryffindor Quidditch team",
        "Order of the Phoenix"
      ],
      "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
    },
    {
      "id": 3,
      "name": "African prince",
      "birth": null,
      "death": null,
      "species": "Human",
      "ancestry": "Muggle-born or half-blood (possibly)",
      "gender": "Male",
      "hair_color": null,
      "eye_color": null,
      "wand": null,
      "patronus": null,
      "house": null,
      "associated_groups": ["Africa"],
      "books_featured_in": [1]
    },
    {
      "id": 380,
      "name": "Zacharias Smith's father",
      "birth": null,
      "death": null,
      "species": "Human",
      "ancestry": null,
      "gender": "Male",
      "hair_color": null,
      "eye_color": null,
      "wand": null,
      "patronus": null,
      "house": null,
      "associated_groups": ["Smith family"],
      "books_featured_in": [6]
    }])).toEqual([
      {
        "id": 380,
        "name": "Zacharias Smith's father",
        "birth": null,
        "death": null,
        "species": "Human",
        "ancestry": null,
        "gender": "Male",
        "hair_color": null,
        "eye_color": null,
        "wand": null,
        "patronus": null,
        "house": null,
        "associated_groups": ["Smith family"],
        "books_featured_in": [6]
      },
      {
        "id": 327,
        "name": "James Potter I",
        "birth": "27 March, 1960",
        "death": "31 October, 1981 (aged 21)",
        "species": "Human",
        "ancestry": "Pure-blood",
        "gender": "Male",
        "hair_color": "Jet-black",
        "eye_color": "Hazel",
        "wand": "11\", Mahogany, unknown core",
        "patronus": "Stag",
        "house": "Gryffindor",
        "associated_groups": [
          "Potter family",
          "Evans family",
          "Hogwarts School of Witchcraft and Wizardry",
          "Marauders",
          "Gryffindor",
          "Gryffindor Quidditch team",
          "Order of the Phoenix"
        ],
        "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
      },
    {
      "id": 3,
      "name": "African prince",
      "birth": null,
      "death": null,
      "species": "Human",
      "ancestry": "Muggle-born or half-blood (possibly)",
      "gender": "Male",
      "hair_color": null,
      "eye_color": null,
      "wand": null,
      "patronus": null,
      "house": null,
      "associated_groups": ["Africa"],
      "books_featured_in": [1]
    }
    ])
  });
});
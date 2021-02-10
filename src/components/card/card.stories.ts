import "./card.css";
import { createCard } from "./card";
import { createElement } from "../../utils/createElement";
import { Character, getCharacter, getCharacters } from "../../utils/api";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};

export const Rick = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchenz",
    status: "Alive",
    species: "Human",
    origin: { name: "Earth (C-137)" },
  });

export const Morty = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    origin: { name: "Earth (C-137)" },
  });

export const Jew = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/255.jpeg",
    name: "Orthodox Jew",
    status: "Alive",
    species: "Human",
    origin: { name: "Earth (Replacement Dimension)" },
  });

export const Multiple = () => {
  const characters = [
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      name: "Morty Smith",
      status: "Dead",
      species: "Human",
      origin: { name: "Earth (C-137)" },
    },
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      name: "Rick Sanchenz",
      status: "Alive",
      species: "Human",
      origin: { name: "Earth (C-137)" },
    },
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/25.jpeg",
      name: "Armothy",
      status: "Dead",
      species: "unknown",
      origin: { name: "Post-Apocalyptic Earth" },
    },
  ];

  const container = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });

  return container;
};

export const CharacterFromAPI = (args, { loaded: { character } }) => {
  return createCard(character);
};

CharacterFromAPI.loaders = [
  async () => ({
    character: await getCharacter(65),
  }),
];

export const CharactersFromAPI = (args, { loaded: { characters } }) => {
  const container = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });
  return container;
};

CharactersFromAPI.loaders = [
  async () => ({
    characters: await getCharacters(),
  }),
];

export const RandomCharacter = () => {
  const randomButton = createElement("button", {
    innerText: "Load random character",
    onclick: async () => {
      // Verify each step (alert, console.log)
      // generate random character id
      const randomCharacterId = Math.floor(Math.random() * 670) + 1;
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values
      // getCharacter from API
      const randomCharacter = await getCharacter(randomCharacterId);
      // create card
      const randomCharacterCard = createCard(randomCharacter);
      // make sure to only display one character
      if (container.childNodes.length > 1) {
        container.removeChild(container.lastChild);
      }
      // append card
      container.append(randomCharacterCard);
      // feel awesome 🐱‍👤
    },
  });

  const container = createElement("div", {
    className: "container",
    childs: [randomButton],
  });
  return container;
};

export const CharactersFromAPIWithFilter = (
  args,
  { loaded: { characters } }
) => {
  const input = createElement("input", {
    onchange: async () => {
      const newCharacters = await getCharacters(input.value);
      const newCards = newCharacters.map((character) => createCard(character));
      characterContainer.innerHTML = "";
      characterContainer.append(...newCards);
    },
  });

  const characterContainer = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });

  const container = createElement("div", {
    className: "",
    childs: [input, characterContainer],
  });

  return container;
};

CharactersFromAPIWithFilter.loaders = [
  async () => ({
    characters: await getCharacters(),
  }),
];

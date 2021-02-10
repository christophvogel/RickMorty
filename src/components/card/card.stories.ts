import "./card.css";
import { createCard } from "./card";
import { createElement } from "../../utils/createElement";
import { getCharacter, getCharacters } from "../../utils/api";

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

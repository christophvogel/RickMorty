import "./card.css";
import { createCard } from "./card";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};

export const Rick = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchenz",
    species: "Human",
    origin: "Earth (C-137)",
  });

export const Morty = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Morty Smith",
    species: "Human",
    origin: "Earth (C-137)",
  });

export const Jew = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/255.jpeg",
    name: "Orthodox Jew",
    species: "Human",
    origin: "Earth (Replacement Dimension)",
  });

import { useState } from "react";

import Modal from "../components/UI/Modal";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Grid from "./Grid/Grid";
import Header from "./Header/Header";
import SkillSet from "./SkillSet/SkillSet";

import pokedex from "../assets/pokedex/pokedex.jpg";
import memoryGame from "../assets/memory-game/memory-game.jpg";
import blog from "../assets/blog/blog.jpg";

import pokedexPokemon from "../assets/pokedex/pokedex-pokemon.jpg";
import memoryGameWin from "../assets/memory-game/memory-game-win.jpg";
import about from "../assets/blog/about.jpg";

const projects = [
  {
    img: [pokedex, pokedexPokemon],
    project: "Pokedex",
    site: "https://kyonyx12.github.io/pokedex/",
    code: "https://github.com/Kyonyx12/pokedex/",
    description:
      "A pokedex where all individual pokemons have is unique and personalized route, a proyect where I practice React Router, and modern React feautures like Hooks, also all the data is coming from the RESTful API of PokeAPI.co",
    id: "1",
  },
  {
    img: [blog, about],
    project: "Blog",
    site: "https://kyonyx12.github.io/my-blog/",
    code: "https://github.com/Kyonyx12/my-blog/",
    description:
      "Proyect that uses the cloud technology, Firebase, to be specific Firestore, since all the post showed are coming from that data base, this proyect has a unique section where the admin can write new articles, and post them in real time.",
    id: "2",
  },
  {
    img: [memoryGame, memoryGameWin],
    project: "Memory Game",
    site: "https://kyonyx12.github.io/memory-game/",
    code: "https://github.com/Kyonyx12/memory-game/",
    description:
      "A simple memory game made with pokemons, without doubt one of the most fun proyects I made so far, specially for the logic involved to make it work, all styles, animations and responsive layout made with pure vanilla CSS.",
    id: "3",
  },
];

export default function Main() {
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState({
    url: "",
    img: "",
    name: "",
    id: "",
  });
  const handleModal = (id) => {
    if (id) {
      const selected = projects.filter((project) => project.id === id);
      setSelected(...selected);
    }
    return setModal(!modal);
  };
  return (
    <>
      {modal && <Modal handleModal={handleModal} selected={selected} />}
      <main>
        <Header />
        <Grid projects={projects} handleModal={handleModal} />
        <SkillSet />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

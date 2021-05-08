import { useState } from "react";

import Modal from "../components/UI/Modal";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";
import Grid from "./Grid/Grid";
import Header from "./Header/Header";
import SkillSet from "./SkillSet/SkillSet";

import pokedex from "../assets/pokedex/pokedex.jpg";
import memoryGame from "../assets/memory-game/memory-game.jpg";
import blog from "../assets/blog/blog.jpg";

const projects = [
  {
    img: pokedex,
    project: "Pokedex",
    site: "https://kyonyx12.github.io/pokedex/",
    code: "https://github.com/Kyonyx12/pokedex/",
    id: "1",
  },
  {
    img: blog,
    project: "Blog",
    site: "https://kyonyx12.github.io/my-blog/",
    code: "https://github.com/Kyonyx12/my-blog/",
    id: "2",
  },
  {
    img: memoryGame,
    project: "Memory Game",
    site: "https://kyonyx12.github.io/memory-game/",
    code: "https://github.com/Kyonyx12/memory-game/",
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
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
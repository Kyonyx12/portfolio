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
import portfolio from "../assets/portfolio/portfolio.jpg";
import cinemApp from "../assets/cinemApp/cinemApp.jpg";

import pokedexPokemon from "../assets/pokedex/pokedex-pokemon.jpg";
import memoryGameWin from "../assets/memory-game/memory-game-win.jpg";
import about from "../assets/blog/about.png";
import portfolioProjects from "../assets/portfolio/portfolioProjects.jpg";
import todoApp from "../assets/todoapp/todoapp.png";
import cinemAppMedia from "../assets/cinemApp/cinemApp-individual.jpg";
import todoAppLogin from "../assets/todoapp/todoapp-login.png";

const projects = [
  {
    img: [pokedex, pokedexPokemon],
    project: "Pokedex",
    site: "https://pokedex-next-kappa.vercel.app/",
    code: "https://github.com/Kyonyx12/pokedex-next",
    description:
      "A pokedex where all individual pokemons have his unique and personalized route, a proyect where I practice NextJS (SSR & SSG), and modern React feautures like Hooks, also all the data is coming from the RESTful API of PokeAPI.co.",
    id: "1",
  },
  {
    img: [cinemApp, cinemAppMedia],
    project: "CinemApp",
    site: "https://cinem-app.vercel.app/",
    code: "https://github.com/Kyonyx12/cinemApp",
    description:
      "*On development* A guide media app where you can register, to add movies or series to your favorites, you can rate all the show and keep updated about the latest movies or tv show, develop with Next.js (React), powered by TheMovieDB RESTApi.",
    id: "2",
  },
  {
    img: [blog, about],
    project: "Blog",
    site: "https://kyonyx12.github.io/my-blog/",
    code: "https://github.com/Kyonyx12/my-blog/",
    description:
      "Proyect that uses the cloud technology, Firebase, to be specific Firestore, since all the post showed are coming from that data base, this proyect has a unique section where the admin can write new articles, and post them in real time.",
    id: "3",
  },
  {
    img: [todoApp, todoAppLogin],
    project: "TodoApp",
    site: "https://kyonyx12.github.io/todo-app/#/",
    code: "https://github.com/Kyonyx12/todo-app",
    description:
      "A todo app where you can create, edit and delete todos, proyect where I practice TypeScript, Redux and Material UI, mobile first, fully responsive, all new todos are saved in your account, and fetched from the Firestore database of Firebase.",
    id: "4",
  },
  {
    img: [portfolio, portfolioProjects],
    project: "Portfolio",
    site: "https://joseantoniolopezramos.site/",
    code: "https://github.com/Kyonyx12/portfolio/",
    description:
      "A minimalist portfolio page to show my projects and in the near future my experience too, made with Reactjs (eventually Next.js to improve loading time, and to add lazy load), pure Vanilla CSS, React-Icons, a couple of coffee cups and  a lot of ❤️. ",
    id: "5",
  },
  {
    img: [memoryGame, memoryGameWin],
    project: "Memory Game",
    site: "https://kyonyx12.github.io/memory-game/",
    code: "https://github.com/Kyonyx12/memory-game/",
    description:
      "A simple memory game made with pokemons, without doubt one of the most fun proyects I made so far, specially for the logic involved to make it work, all styles, animations and responsive layout made with pure vanilla CSS.",
    id: "6",
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

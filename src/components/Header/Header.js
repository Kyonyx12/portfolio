import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { RiComputerLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [hidden, setHidden] = useState(true);

  return (
    <>
      <header>
        <div className="hero-img">
          <section>
            <div className="header-icons">
              <SiJavascript color="#f7df1e" size="2em" />
              <div className="header-img-center">
                <RiComputerLine size="4rem" />
              </div>
              <FaReact color="#61dbfb" size="2em" />
            </div>
            <div className="header-info">
              <h1>Jose Antonio Lopez Ramos</h1>
              <hr />
              <h3>Front-end developer</h3>
            </div>
          </section>
        </div>
      </header>
      <nav>
        <div className="logo">
          <RiComputerLine size="1rem" />
        </div>
        <GiHamburgerMenu
          className="burger"
          onClick={() => setHidden(!hidden)}
        />
        <ul>
          <li>
            <a href="#portfolio" key="portfolio">
              <p>Portfolio</p>
            </a>
          </li>
          <li>
            <a href="#skill-set" key="skill-set">
              <p>Skill Set</p>
            </a>
          </li>
          <li>
            <a href="#contact">
              <p>Contact</p>
            </a>
          </li>
        </ul>
      </nav>
      <div className={`display ${hidden ? "hidden" : ""}`}>
        <ul>
          <li>
            <a
              href="#portfolio"
              key="portfolio"
              onClick={() => setHidden(!hidden)}
            >
              <p>Portfolio</p>
            </a>
          </li>
          <li>
            <a
              href="#skill-set"
              key="skill-set"
              onClick={() => setHidden(!hidden)}
            >
              <p>Skill Set</p>
            </a>
          </li>
          <li>
            <a href="#contact" key="contact" onClick={() => setHidden(!hidden)}>
              <p>Contact</p>
            </a>
          </li>
        </ul>
      </div>
      <br />
    </>
  );
}

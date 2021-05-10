import { SiLinkedin, SiGithub, SiFacebook } from "react-icons/si";
import "./Footer.css";
export default function Footer() {
  const year = new Date();

  return (
    <footer>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/jose-antonio-lopez-ramos-06199920b/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin size="2rem" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Kyonyx12"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub size="2rem" />
          </a>
        </li>
        <li>
          <SiFacebook
            size="2rem"
            color="#ffffff99"
            style={{ cursor: "not-allowed" }}
          />
        </li>
      </ul>
      <p>
        Developed by Antonio Lopez. <br /> All rights reserved.{" "}
        {year.getFullYear()}
      </p>
    </footer>
  );
}

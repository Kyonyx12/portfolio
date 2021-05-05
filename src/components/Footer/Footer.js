import { SiLinkedin, SiGithub, SiFacebook } from "react-icons/si";

export default function Footer() {
  const year = new Date();

  return (
    <footer>
      <ul>
        <li>
          <a href="#index.html">
            <SiLinkedin size="2rem" />
          </a>
        </li>
        <li>
          <a href="#index.html">
            <SiGithub size="2rem" />
          </a>
        </li>
        <li>
          <a href="#index.html">
            <SiFacebook size="2rem" />
          </a>
        </li>
      </ul>
      <p>
        Developed by Antonio Lopez. <br /> All rights reserved.{" "}
        {year.getFullYear()}
      </p>
    </footer>
  );
}

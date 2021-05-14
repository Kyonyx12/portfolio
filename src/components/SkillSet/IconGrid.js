import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiGit,
  SiNpm,
  SiGithub,
  SiFirebase,
  SiRedux,
  SiNextDotJs,
  SiTailwindcss,
} from "react-icons/si";

export default function IconGrid() {
  return (
    <div className="flex-icons-container">
      <div className="icon-bg">
        <div className="icon alt">
          <SiHtml5 size="5rem" color="#f47532" />
          <span>HTML</span>
        </div>
      </div>
      <div className="icon-bg">
        <div className="icon alt">
          <SiCss3 size="5rem" color="#2a9aca" />
          <span>CSS3</span>
        </div>
      </div>
      <div className="icon-bg">
        <div className="icon alt">
          <SiJavascript size="5rem" color="#f7df1e" />
          <span>JavaScript</span>
        </div>
      </div>
      <div className="icon-bg">
        <div className="icon alt">
          <SiReact size="5rem" color="#61dbfb" />
          <span>React</span>
        </div>
      </div>
      <div className="icon-bg">
        <div className="icon alt">
          <SiBootstrap size="5rem" color="#5d3c7f" />
          <span>Bootstrap</span>
        </div>
      </div>
      <div className="icon-bg">
        <div className="icon alt">
          <SiTailwindcss size="5rem" color="#1cacbb" />
          <span>Tailwind CSS</span>
        </div>
      </div>
      <div className="icon-bg">
        <div className="icon alt">
          <SiGit size="5rem" color="#f05033" />
          <span>Git</span>
        </div>
      </div>
      <div className="icon-bg">
        <div className="icon alt">
          <SiGithub size="5rem" color="#191919" />
          <span>GitHub</span>
        </div>
      </div>
      <div className="icon-bg">
        <div className="icon alt">
          <SiNpm size="5rem" color="#cc3534" />
          <span>NPM</span>
        </div>
      </div>
      <div className="icon-bg">
        <div className="icon alt">
          <SiFirebase size="5rem" color="#fc941c" />
          <span>Firebase</span>
        </div>
      </div>
    </div>
  );
}

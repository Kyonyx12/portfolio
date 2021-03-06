import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiGit,
  SiNpm,
  SiFirebase,
  SiRedux,
  SiNextDotJs,
  SiMaterialUi,
  SiTypescript,
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
          <SiTypescript size="5rem" color="#007acc" />
          <span>TypeScript</span>
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
          <SiNextDotJs size="5rem" color="#191919" />
          <span>Next.js</span>
        </div>
      </div>
      <div className="icon-bg">
        <div className="icon alt">
          <SiRedux size="5rem" color="#764abc" />
          <span>Redux</span>
        </div>
      </div>
      <div className="icon-bg">
        <div className="icon alt">
          <SiMaterialUi size="5rem" color="#1eb1fc" />
          <span>Material UI</span>
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
          <SiGit size="5rem" color="#f05033" />
          <span>Git</span>
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

import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiGit,
  SiNpm,
  SiGithub,
} from "react-icons/si";

export default function IconGrid() {
  return (
    <div className="flex-icons-container">
      <div className="icon-bg">
        <div className="icon alt">
          <SiHtml5 size="5rem" color="#f47532" title="HTML5" />
          <span>HTML</span>
        </div>
      </div>
      <div className="icon-bg">
        <div className="icon alt">
          <SiCss3 size="5rem" color="#2a9aca" title="CSS3" />
          <span>CSS3</span>
        </div>
      </div>
      <div className="icon-bg">
        <div className="icon alt">
          <SiBootstrap size="5rem" color="#5d3c7f" title="Bootstrap" />
          <span>Bootstrap</span>
        </div>
      </div>
      <div className="icon-bg">
        <div className="icon alt">
          <SiJavascript size="5rem" color="#f7df1e" title="JavaScript" />
          <span>JavaScript</span>
        </div>
      </div>
      <div className="icon-bg">
        <div className="icon alt">
          <SiReact size="5rem" color="#61dbfb" title="React" />
          <span>React</span>
        </div>
      </div>
      <div className="icon-bg">
        <div className="icon alt">
          <SiGit size="5rem" color="#f05033" title="Git" />
          <span>Git</span>
        </div>
      </div>

      <div className="icon-bg">
        <div className="icon alt">
          <SiGithub size="5rem" color="#191919" title="Github" />
          <span>GitHub</span>
        </div>
      </div>
      <div className="icon-bg">
        <div className="icon alt">
          <SiNpm size="5rem" color="#cc3534" title="NPM" />
          <span>NPM</span>
        </div>
      </div>
    </div>
  );
}

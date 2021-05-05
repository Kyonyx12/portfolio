import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiGit,
  SiNpm,
  SiGithub
} from "react-icons/si";

export default function IconGrid() {
  return (
    <div className="flex-icons-container">
      <div className="icon-bg">
        <div className="icon">
          <SiHtml5 size="5rem" color="#f47532" />
        </div>
      </div>
      <div className="icon-bg">
        <div className="icon">
          <SiCss3 size="5rem" color="#2a9aca" />
        </div>
      </div>
      <div className="icon-bg">
        <div className="icon">
          <SiBootstrap size="5rem" color="#5d3c7f" />
        </div>
      </div>
      <div className="icon-bg">
        <div className="icon">
          <SiJavascript size="5rem" color="#f7df1e" />
        </div>
      </div>
      <div className="icon-bg">
        <div className="icon">
          <SiReact size="5rem" color="#61dbfb" />
        </div>
      </div>
      <div className="icon-bg">
        <div className="icon">
          <SiGit size="5rem" color="#f05033" />
        </div>
      </div>

      <div className="icon-bg">
        <div className="icon">
          <SiGithub size="5rem" color="#191919" />
        </div>
      </div>
      <div className="icon-bg">
        <div className="icon">
          <SiNpm size="5rem" color="#cc3534" />
        </div>
      </div>
    </div>
  );
}

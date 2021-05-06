import { RiZoomInLine } from "react-icons/ri";

export default function Card({ id, img, site, project, handleModal }) {
  return (
    <article className="card-flex-items">
      <div className="overflow">
        <div className="hover">
          <div className="zoom-container" onClick={() => handleModal(id)}>
            <RiZoomInLine className="zoom-icon" />
            <p className="zoom-name">{project}</p>
          </div>
          <img src={img} alt={project} className="project" />
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet
        erat tempor, consequat tellus nec, posuere massa. Praesent vel pretium
        massa. Vestibulum porta in elit et condimentum.
      </p>
      <a href={site} className="link" target="_blank" rel="noreferrer">
        See live demo
      </a>
    </article>
  );
}

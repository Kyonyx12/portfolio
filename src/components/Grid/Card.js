import { RiZoomInLine } from "react-icons/ri";

export default function Card({ id, img, site, project, handleModal }) {
  const imgDef = img[0];

  return (
    <article className="card-flex-items">
      <div className="overflow" onClick={() => handleModal(id)}>
        <div className="hover">
          <div className="zoom-container">
            <RiZoomInLine className="zoom-icon" />
            <p className="zoom-name">{project}</p>
          </div>
          <img src={imgDef} alt={project} className="project" />
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

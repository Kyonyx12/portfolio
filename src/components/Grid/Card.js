import { RiZoomInLine } from "react-icons/ri";

export default function Card({
  description,
  id,
  img,
  site,
  project,
  handleModal,
}) {
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
      <p>{description}</p>
      <a href={site} className="link" target="_blank" rel="noreferrer">
        See live demo
      </a>
    </article>
  );
}

import { RiZoomInLine } from "react-icons/ri";
import { LazyLoadImage } from "react-lazy-load-image-component";

import placeholder from "../../assets/placeholder.png";

import "react-lazy-load-image-component/src/effects/blur.css";

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
          <LazyLoadImage
            effect="blur"
            src={imgDef}
            alt={project}
            className="project"
            placeholderSrc={placeholder}
          />
        </div>
      </div>
      <p>{description}</p>
      <a href={site} className="link" target="_blank" rel="noreferrer">
        See live demo
      </a>
    </article>
  );
}

import {
  RiCloseCircleLine,
  RiGithubFill,
  RiExternalLinkFill,
} from "react-icons/ri";
import "./Modal.css";

export default function Modal({ selected, handleModal }) {
  const { project, site, code, img } = selected;

  return (
    <div className="modal" onClick={() => handleModal()}>
      <div className="modal-info">
        <button onClick={() => handleModal()} className="modal-close">
          <RiCloseCircleLine className="modal-close-icon" color="#00b0f0" />
        </button>
        <img src={img} alt={project} className="modal-img" />
        <div className="modal-link-container">
          <a
            className="modal-link"
            href={site}
            target="_blank"
            rel="noreferrer"
          >
            <RiExternalLinkFill size="2.5rem" className="modal-link-icon" />
          </a>
          <a
            className="modal-link"
            href={code}
            target="_blank"
            rel="noreferrer"
          >
            <RiGithubFill size="2.5rem" className="modal-link-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

import { RiCloseCircleLine } from "react-icons/ri";
import "./Modal.css";

export default function Modal({ selected, handleModal }) {
  const { project, site, code, img } = selected;

  return (
    <div className="modal">
      <div className="modal-info">
        <button onClick={() => handleModal()} className="modal-close">
          <RiCloseCircleLine className="modal-close-icon" color="#00b0f0" />
        </button>
        <img src={img} alt={project} className="modal-img" />
        <div>
          <a
            className="modal-button"
            href={site}
            target="_blank"
            rel="noreferrer"
          >
            <p>See live</p>
          </a>
          <a
            className="modal-button"
            href={code}
            target="_blank"
            rel="noreferrer"
          >
            <p>See on Github</p>
          </a>
        </div>
      </div>
    </div>
  );
}

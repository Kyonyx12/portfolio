import { useState, useEffect } from "react";
import {
  RiCloseCircleLine,
  RiGithubFill,
  RiExternalLinkFill,
} from "react-icons/ri";
import "./Modal.css";

export default function Modal({ selected, handleModal }) {
  const { project, site, code, img } = selected;

  const [actualImg, setActualImg] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setActualImg(!actualImg);
    }, 2500);
    return () => clearTimeout(timeId);
  }, [actualImg]);

  return (
    <div className="modal" onClick={() => handleModal()}>
      <div className="modal-info">
        <button onClick={() => handleModal()} className="modal-close">
          <RiCloseCircleLine className="modal-close-icon" color="#00b0f0" />
        </button>
        <img
          src={`${actualImg ? img[1] : img[0]}`}
          alt={project}
          className="modal-img"
        />
        <div className="modal-link-container">
          <a
            className="modal-link"
            href={site}
            target="_blank"
            rel="noreferrer"
          >
            <RiExternalLinkFill className="modal-link-icon" />
          </a>
          <a
            className="modal-link"
            href={code}
            target="_blank"
            rel="noreferrer"
          >
            <RiGithubFill className="modal-link-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

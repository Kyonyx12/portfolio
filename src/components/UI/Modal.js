import { useState, useEffect } from "react";
import {
  RiCloseCircleLine,
  RiGithubFill,
  RiExternalLinkFill,
} from "react-icons/ri";
import classes from "./Modal.module.css";

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
    <div className={classes.modal} onClick={() => handleModal()}>
      <div className={classes["modal-info"]}>
        <button
          onClick={() => handleModal()}
          className={classes["modal-close"]}
        >
          <RiCloseCircleLine
            className={classes["modal-close-icon"]}
            color="#00b0f0"
          />
        </button>
        <img
          src={`${actualImg ? img[1] : img[0]}`}
          alt={project}
          className={classes["modal-img"]}
        />
        <div className={classes["modal-link-container"]}>
          <a
            className={classes["modal-link"]}
            href={site}
            target="_blank"
            rel="noreferrer"
          >
            <RiExternalLinkFill className={classes["modal-link-icon"]} />
          </a>
          <a
            className={classes["modal-link"]}
            href={code}
            target="_blank"
            rel="noreferrer"
          >
            <RiGithubFill className={classes["modal-link-icon"]} />
          </a>
        </div>
      </div>
    </div>
  );
}

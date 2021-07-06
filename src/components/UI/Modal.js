import React from "react";
import {
  RiCloseCircleLine,
  RiGithubFill,
  RiExternalLinkFill,
} from "react-icons/ri";
import { Carousel } from "react-bootstrap";
import classes from "./Modal.module.css";

export default function Modal({ selected, handleModal }) {
  const { img, site, code } = selected;

  return (
    <div className={classes.modal}>
      <div className="d-flex justify-content-center">
        <div
          style={{ backgroundColor: "#fff", width: "80vw" }}
          className="d-flex justify-content-end"
        >
          <RiCloseCircleLine
            size="3rem"
            color="#36bed9"
            onClick={handleModal}
            style={{ cursor: "pointer" }}
            className={classes.modalIcon}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Carousel style={{ maxWidth: "80%", backgroundColor: "#fff" }}>
          <Carousel.Item>
            <div
              className="d-flex justify-content-center "
              style={{ height: "600px", minWidth: "80vw" }}
            >
              <img
                src={img[0]}
                alt="First slide"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="d-flex justify-content-center "
              style={{ height: "600px", minWidth: "80vw" }}
            >
              <img
                src={img[1]}
                alt="Second slide"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="d-flex justify-content-center">
        <div
          style={{ backgroundColor: "#fff", width: "80vw" }}
          className="d-flex justify-content-center"
        >
          <a target="_blank" rel="noreferrer" href={site}>
            <RiExternalLinkFill
              size="3rem"
              color="#36bed9"
              className={classes.modalIcon}
            />
          </a>
          <a rel="noreferrer" target="_blank" href={code}>
            <RiGithubFill
              size="3rem"
              color="#36bed9"
              className={classes.modalIcon}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

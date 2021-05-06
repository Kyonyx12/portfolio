import "./Modal.css";

export default function Modal({ selected, handleModal }) {
  const { project, site, code, img } = selected;

  return (
    <div className="modal">
      <div className="modal-info">
        <button onClick={() => handleModal()}>X</button>
        <img src={img} alt={project} />
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
  );
}

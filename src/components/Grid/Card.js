export default function Card({ imgType, url }) {
  return (
    <article className="card-flex-items">
      <img src={imgType} alt="project" className="projects" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet
        erat tempor, consequat tellus nec, posuere massa. Praesent vel pretium
        massa. Vestibulum porta in elit et condimentum.
      </p>
      <a href={url} className="link" target="_blank" rel="noreferrer">
        See live demo
      </a>
    </article>
  );
}

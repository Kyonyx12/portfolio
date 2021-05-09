import Card from "./Card";

export default function Grid({ projects, handleModal }) {
  return (
    <section className="grid">
      <div>
        <h1 id="portfolio">Portfolio</h1>
        <hr />
      </div>
      <div className="grid-flex-container">
        {projects.map((actProject, ind) => {
          const { img, site, project, id, description } = actProject;
          return (
            <Card
              handleModal={handleModal}
              img={img}
              key={ind}
              site={site}
              project={project}
              id={id}
              description={description}
            />
          );
        })}
      </div>
    </section>
  );
}

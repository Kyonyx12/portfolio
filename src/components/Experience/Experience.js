import ExpCard from "./ExpCard";
const experience = [
  { company: "Empty", rol: "Front-end developer", fromTo: "2020-2021" },
  { company: "Null", rol: "Front-end developer", fromTo: "2020-2021" },
  { company: "404", rol: "Front-end developer", fromTo: "2020-2021" }
];
export default function Experience() {
  return (
    <section className="experience">
      <div>
        <h1 id="experience">Experience</h1>
        <hr />
      </div>
      <article className="exp-cards-flex-container">
        {experience.map((job, ind) => {
          const { company, rol, fromTo } = job;
          return (
            <ExpCard key={ind} company={company} rol={rol} fromTo={fromTo} />
          );
        })}
      </article>
    </section>
  );
}

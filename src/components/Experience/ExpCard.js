export default function ExpCard({ company, rol, fromTo }) {
  return (
    <article className="exp-card">
      <img src="https://placeimg.com/160/160/people" alt="experience" />
      <h3>{company}</h3>
      <p>{rol}</p>
      <p>{fromTo}</p>
    </article>
  );
}

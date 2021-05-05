import Card from "./Card";
import pokedex from "../../assets/pokedex/pokedex.jpg";
import memoryGame from "../../assets/memory-game/memory-game.jpg";
import blog from "../../assets/blog/blog.jpg";
const imgTypes = [pokedex, blog, memoryGame];
const urls = [
  "https://16jbu.csb.app/",
  "https://5y4x6.csb.app/",
  "https://16jbu.csb.app/"
];
export default function Grid() {
  return (
    <section className="grid">
      <div>
        <h1 id="portfolio">Portfolio</h1>
        <hr />
      </div>
      <div className="grid-flex-container">
        {imgTypes.map((type, ind) => {
          const url = urls[ind];
          return <Card imgType={type} key={ind} url={url} />;
        })}
      </div>
    </section>
  );
}

import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";
import Grid from "./Grid/Grid";
import Header from "./Header/Header";
import SkillSet from "./SkillSet/SkillSet";

export default function Main() {
  return (
    <main>
      <Header />
      <Grid />
      <SkillSet />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

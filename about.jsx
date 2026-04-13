import Navbar from "../components/Navbar";
import AboutHero from "../components/about_hero";
import Aboutpurpose from "../components/about_purpose";
import Aboutiyxworks from "../components/about_iyx_works";
import Ticker from "../components/tickerData";
import AboutEcosystem from "../components/about_ecosystem";
import Footer from "../components/footer";

function About() {
  return (
    <div className="bg-[#151419] min-h-screen">
      <Navbar />
      <AboutHero />
      <Aboutpurpose />
      <Aboutiyxworks />
      <Ticker />
      <AboutEcosystem />
      <Footer />
    </div>
  );
}

export default About;
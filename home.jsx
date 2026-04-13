import Navbar from "../components/Navbar";
import Hero from "../components/index_hero";
import EcosystemSection from "../components/index_ecosystem";
import Ticker from "../components/tickerData";
import Whyiyx from "../components/index_why_iyx";
import Products from "../components/products";
import Footer from "../components/footer";


function App() {
  return (
    <div className="bg-[#151419] min-h-screen">
      <Navbar />
      <Hero />
      <EcosystemSection />
      <Ticker />
      <Whyiyx />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import HeroExtraText from "./Components/HeroExtraText";
import Process from "./Components/Process";
import OurWork from "./Components/OurWork";
import OurResults from "./Components/OurResults";
import OurServices from "./Components/OurServices";
import OurTeam from "./Components/OurTeam";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pl-10">
        <HeroSection />
      </div>
      <HeroExtraText />
      <Process />
      <OurWork />
      <OurResults />
      <OurServices />
      <OurTeam />
    </div>
  );
}

export default App;

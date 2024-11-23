import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import HeroExtraText from "./Components/HeroExtraText";
import Process from "./Components/Process";
import OurWork from "./Components/OurWork";

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
    </div>
  );
}

export default App;

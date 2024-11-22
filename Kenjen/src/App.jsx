import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import HeroExtraText from "./Components/HeroExtraText";
import Process from "./Components/Process";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pl-10">
        <HeroSection />
      </div>
      <HeroExtraText />
      <Process />
    </div>
  );
}

export default App;

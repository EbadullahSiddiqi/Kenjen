import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Test from "./Components/test";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pl-10">
        <HeroSection />
      </div>
      <Test />
      <Test />
      <Test />
      <Test />
    </div>
  );
}

export default App;

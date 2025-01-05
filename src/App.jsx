import "./App.css";
import HeroSection from "./components/Herosection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <div className="text-3xl font-bold">Portfolio project is start</div>
    </>
  );
}

export default App;

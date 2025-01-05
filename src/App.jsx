import "./App.css";
import CardSection from "./components/CardSection";
import ContactMe from "./components/ContanctMe";
import Footer from "./components/Footer";
import HeroSection from "./components/Herosection";
import Navbar from "./components/Navbar";
import ResumeSection from "./components/ResumeSection";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <CardSection></CardSection>
      <ResumeSection></ResumeSection>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </>
  );
}

export default App;

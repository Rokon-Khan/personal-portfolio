import "./App.css";
import AboutMe from "./components/AboutMe";
import CardSection from "./components/CardSection";
import ContactMe from "./components/ContanctMe";
import Footer from "./components/Footer";
import HeroSection from "./components/Herosection";
import Navbar from "./components/Navbar";
import ResumeSection from "./components/ResumeSection";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <CardSection></CardSection>
      <ResumeSection></ResumeSection>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </>
  );
}

export default App;

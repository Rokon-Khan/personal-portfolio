// import { useLocation } from "react-router-dom";
import Rokon from "../assets/Rokon.png";
// import ParticlesUI from "@/Animation/ParticlesUI";
// import ShineBorder from "@/Components/ui/shine-border";

const AboutMe = () => {
  //   const location = useLocation();

  return (
    <section
      id="about"
      className={`flex w-11/12 mx-auto relative flex-col gap-20 lg:flex-row ${
        location.pathname === "/" ? "pt-28" : "my-20"
      }`}
    >
      {/* Particles */}
      {/* {
                location.pathname === '/about-me' && <ParticlesUI />
            } */}

      {/* Image Section */}
      <div className="lg:w-[30%] flex flex-col justify-center items-center relative">
        <div color="#38BD67" className={`dark:bg-transparent bg-transparent`}>
          <img
            className="lg:w-[320px] w-10/12 rounded-full"
            src={Rokon}
            alt="Md Rokonuzzaman"
          />
        </div>
      </div>

      {/* About Content Section */}
      <div className="lg:w-[70%] flex flex-col items-center lg:items-start justify-center">
        {/* Section Title */}
        <button className=" py-2 text-3xl font-bold bg-white rounded-lg mb-4 flex items-center gap-2 dark:bg-dark-lite">
          About Me
        </button>
        <h2 className="text-center lg:text-start text-3xl text-primary1 font-semibold leading-[48px] mb-10">
          Md. Rokonuzzaman
        </h2>
        <p className="text-center lg:text-start text-[1.1rem] text-dark-lite font-medium leading-[31px] dark:text-white-deep">
          Hi, I’m Md Rokonuzzamn, a passionate Frontend Developer specializing
          in React.js. With a strong foundation in JavaScript and experience in
          modern frameworks, I craft dynamic, user-friendly web applications
          that deliver seamless user experiences. I’m also skilled in Node.js,
          Express, and MongoDB, allowing me to contribute to full-stack
          solutions when needed. Let's build something amazing together!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

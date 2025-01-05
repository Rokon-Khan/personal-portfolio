import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaGithub, FaRegEnvelope } from "react-icons/fa6";
import rokon from "../assets/Rokon.png";
const HeroSection = () => {
  return (
    <div
      id="about"
      className="bg-blue-50 p-10 min-h-96 max-w-7xl flex items-center justify-between rounded-lg mx-auto"
    >
      <div className="text-left ">
        <div className="mt-8 space-y-4">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Hi, I&apos;m
          </h1>
          <h2 className="text-5xl font-extrabold text-gray-900">
            Md Rokonuzzaman
          </h2>
          <p className="text-lg text-gray-600 mt-2">Frontend Web Developer</p>
          <div className="mt-4 flex justify-start space-x-4 text-4xl">
            <a
              href="https://www.linkedin.com/in/md-rokonuzzaman-a8a9a41aa/"
              target="_blank"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Rokon-Khan"
              target="_blank"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/md.rokon.khan.04"
              target="_blank"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaRegEnvelope />
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/1By6WjyxtM7VII1vEyREHQDRn4Pqmukwo/view?usp=sharing"
            target="_blank"
            className="btn bg-green-600 font-bold text-white text-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div>
        <img className="w-full" src={rokon} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;

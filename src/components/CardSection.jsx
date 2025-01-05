import { FaGithub } from "react-icons/fa6";
const CardSection = () => {
  //   https://i.ibb.co.com/k0bt7YT/PH-A-9-Winter-Doantion.png
  // https://i.ibb.co.com/MfHz8NH/Ph-A-10-Fund-Raiser-1.png
  // https://i.ibb.co.com/jfK1VPL/Ph-A-11-Assignment-Management.png
  // https://i.ibb.co.com/Sm8bRTH/Ph-A-11-Assignment-Management-1.png
  const projects = [
    {
      title: "Assignment Management",
      image: "https://i.ibb.co.com/jfK1VPL/Ph-A-11-Assignment-Management.png",
      description:
        "The Assignment Management System which Teachers can create, update, and manage assignments in real-time, while students can submit their work and track deadlines",
      techStack: [
        "React",
        "TailwindCSS",
        "Firebase",
        "NodeJS",
        "MongoDB",
        "Javascript",
      ],
      livePreview: "https://ph-assignment-management-system.surge.sh/",
      github: "#",
      details: "#",
    },

    {
      title: "Fund Raiser",
      image: "https://i.ibb.co.com/MfHz8NH/Ph-A-10-Fund-Raiser-1.png",
      description:
        "fundraising campaign is to raise funds to advance key initiatives in Technology/Healthcare that will drive meaningful change.",
      techStack: [
        "React",
        "TailwindCSS",
        "Firebase",
        "MongoDB",
        "Javascript",
        "NodeJS",
      ],
      livePreview: "https://ph-assignment-fund-raiser-campaign.surge.sh/",
      github: "#",
      details: "#",
    },

    {
      title: "Winter Donation",
      image: "https://i.ibb.co.com/k0bt7YT/PH-A-9-Winter-Doantion.png",
      description:
        "BistroBoss is a modern dining experience that blends gourmet flavors with a casual, welcoming atmosphere.",
      techStack: ["React", "TailwindCSS", "Javascript", "Firebase"],
      livePreview: "http://assignment-9-winter-donation.surge.sh/",
      github: "#",
      details: "#",
    },
  ];

  return (
    <div id="projects" className="bg-blue-50 py-10 mt-10">
      <div className="max-w-[300px] mx-auto">
        <h2 className="bg-green-100 p-2 rounded-full text-3xl font-bold text-center mb-10">
          My Recent Projects
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-100 flex flex-col items-center p-5 shadow-lg rounded-lg overflow-hidden"
          >
            <div className="bg-white rounded-lg p-3 w-[400px] h-[200px]">
              <img
                src={project.image}
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap mb-4">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={project.livePreview}
                  target="_blank"
                  className="text-green-600 btn hover:text-green-800 font-bold"
                >
                  Live Preview
                </a>
                <a
                  href={project.github}
                  className="text-green-600 btn hover:text-green-800"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.details}
                  className="text-green-600 btn hover:text-green-900"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;

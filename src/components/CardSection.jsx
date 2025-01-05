const CardSection = () => {
  const projects = [
    {
      title: "Service Orbit",
      description:
        "Service Orbit is a service-sharing web application designed to connect service providers with potential clients.",
      techStack: [
        "React",
        "TailwindCSS",
        "Firebase",
        "NodeJS",
        "MongoDB",
        "Javascript",
      ],
      livePreview: "#",
      github: "#",
      details: "#",
    },
    {
      title: "Md Rokonuzzaman",
      description:
        "Hello! Md Rokonuzzaman, a passionate and dedicated Front-end developer with a knack for creating vibrant applications.",
      techStack: ["Javascript", "TailwindCSS", "React"],
      livePreview: "#",
      github: "#",
      details: "#",
    },
    {
      title: "Adventure",
      description:
        "Film Fusion is an interactive and feature-rich platform designed to cater to movie enthusiasts.",
      techStack: [
        "React",
        "TailwindCSS",
        "Firebase",
        "MongoDB",
        "Javascript",
        "NodeJS",
      ],
      livePreview: "#",
      github: "#",
      details: "#",
    },
    {
      title: "GreenQuest Adventures",
      description:
        "GreenQuest Adventures is an eco-friendly exploration platform where users embark on thrilling adventures.",
      techStack: ["React", "TailwindCSS", "Javascript", "Firebase"],
      livePreview: "#",
      github: "#",
      details: "#",
    },
    {
      title: "Quiz Website",
      description:
        "BistroBoss is a modern dining experience that blends gourmet flavors with a casual, welcoming atmosphere.",
      techStack: [
        "React",
        "TailwindCSS",
        "Javascript",
        "Firebase",
        "MongoDB",
        "NodeJS",
        "Express",
      ],
      livePreview: "#",
      github: "#",
      details: "#",
    },
    {
      title: "Weather Checked",
      description:
        "The Weather Checker application provides users with real-time weather updates, making it easy to plan their day.",
      techStack: ["HTML", "Javascript", "CSS"],
      livePreview: "#",
      github: "#",
      details: "#",
    },
  ];

  return (
    <div className="bg-blue-50 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Works</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
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
                  className="text-blue-600 hover:text-blue-800 font-bold"
                >
                  Live Preview
                </a>
                <a
                  href={project.github}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href={project.details}
                  className="text-gray-600 hover:text-gray-900"
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

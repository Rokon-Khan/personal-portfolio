const ResumeSection = () => {
  const experiences = [
    {
      title: "HTML/CSS Designer",
      company: "Self Learner| Online Resources",
      date: "2020 - 2021",
      description:
        "I start to learn HTML & CSS journey during COVID-19 to learn from different online resources",
    },
    {
      title: "JavaScript Learner",
      company: "Self Learner| Online Resources",
      date: "2022 - 2023",
      description:
        "I start to learn JavScript journey from different online resources try to solve different of problems",
    },
  ];

  const education = [
    {
      title: "Start Job",
      institution: "Abacus Soft BD Ltd | Jashore IT Park",
      date: "2023 - 2024",
      description:
        "I started my job at abacus Soft BD Ltd in 2023 as web developer.",
    },
    {
      title: "Bachelor Degree",
      institution: "Jashore University of Science & Technology | Jashore",
      date: "2017 - 2020",
      description:
        "I have completed my graduation from Jashore University of Science & Technology in Physics ",
    },
  ];

  return (
    <div
      id="resume"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-50  px-4"
    >
      <div className="max-w-7xl w-full">
        <h3 className="text-green-600 text-2xl font-semibold text-center mb-4">
          Education & Experience
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          My Resume
        </h1>
        <p className="text-gray-500 text-center mb-12">
          Here is a brief descriptions of my Resume, I also describe my learnig
          path in below.
        </p>

        <div className="relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {experiences.map((item, index) => (
              <div
                key={index}
                className="relative md:pr-12 md:pl-0 text-right md:even:text-left md:even:pr-0 md:even:pl-12"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 md:left-auto md:translate-x-0 md:translate-y-0 h-5 w-5 "></div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-xl text-gray-500 mb-2">{item.company}</p>
                <p className="text-xl text-green-600 font-semibold mb-4">
                  {item.date}
                </p>
                <p className="text-xl text-gray-500">{item.description}</p>
              </div>
            ))}

            {education.map((item, index) => (
              <div
                key={index}
                className="relative md:pr-12 md:pl-0 text-left md:even:text-right md:even:pr-0 md:even:pl-12"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 md:left-auto md:translate-x-0 md:translate-y-0 h-5 w-5 "></div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-xl text-gray-500 mb-2">{item.institution}</p>
                <p className="text-xl text-green-600 font-semibold mb-4">
                  {item.date}
                </p>
                <p className="text-xl text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;

// const ResumeSection = () => {
//   const experiences = [
//     {
//       title: "UI/UX Designer",
//       company: "Google INC | New York",
//       date: "2011 - 2013",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     },
//     {
//       title: "Web Designer",
//       company: "Facebook INC | New York",
//       date: "2014 - 2016",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     },
//   ];

//   const education = [
//     {
//       title: "Specialization Course",
//       institution: "Stanford University | New York",
//       date: "2017 - 2018",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     },
//     {
//       title: "Bachelor Degree",
//       institution: "Stanford University | New York",
//       date: "2019 - 2021",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-8 px-4">
//       <div className="max-w-4xl w-full">
//         <h3 className="text-blue-600 text-sm font-semibold text-center mb-2">
//           Education & Experience
//         </h3>
//         <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
//           My Resume
//         </h1>
//         <p className="text-gray-500 text-center mb-10">
//           There are many variations of passages of Lorem Ipsum available but the
//           majority have suffered alteration in some form.
//         </p>

//         <div className="relative">
//           <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px bg-gray-300 h-full"></div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {experiences.map((item, index) => (
//               <div
//                 key={index}
//                 className="relative md:pr-8 md:pl-0 text-right md:even:text-left md:even:pr-0 md:even:pl-8"
//               >
//                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 md:left-auto md:translate-x-0 md:translate-y-0 h-4 w-4 rounded-full bg-blue-500 border-4 border-white"></div>
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-gray-500 mb-2">{item.company}</p>
//                 <p className="text-sm text-blue-600 font-semibold mb-2">
//                   {item.date}
//                 </p>
//                 <p className="text-sm text-gray-500">{item.description}</p>
//               </div>
//             ))}

//             {education.map((item, index) => (
//               <div
//                 key={index}
//                 className="relative md:pr-8 md:pl-0 text-left md:even:text-right md:even:pr-0 md:even:pl-8"
//               >
//                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 md:left-auto md:translate-x-0 md:translate-y-0 h-4 w-4 rounded-full bg-blue-500 border-4 border-white"></div>
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-gray-500 mb-2">{item.institution}</p>
//                 <p className="text-sm text-blue-600 font-semibold mb-2">
//                   {item.date}
//                 </p>
//                 <p className="text-sm text-gray-500">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumeSection;

import React from "react";

const ResumeSection = () => {
  const experiences = [
    {
      title: "UI/UX Designer",
      company: "Google INC | New York",
      date: "2011 - 2013",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Web Designer",
      company: "Facebook INC | New York",
      date: "2014 - 2016",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const education = [
    {
      title: "Specialization Course",
      institution: "Stanford University | New York",
      date: "2017 - 2018",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Bachelor Degree",
      institution: "Stanford University | New York",
      date: "2019 - 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl w-full">
        <h3 className="text-blue-600 text-sm font-semibold text-center mb-4">
          Education & Experience
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          My Resume
        </h1>
        <p className="text-gray-500 text-center mb-12">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>

        <div className="relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {experiences.map((item, index) => (
              <div
                key={index}
                className="relative md:pr-12 md:pl-0 text-right md:even:text-left md:even:pr-0 md:even:pl-12"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 md:left-auto md:translate-x-0 md:translate-y-0 h-5 w-5 rounded-full bg-blue-500 border-4 border-white"></div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{item.company}</p>
                <p className="text-sm text-blue-600 font-semibold mb-4">
                  {item.date}
                </p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}

            {education.map((item, index) => (
              <div
                key={index}
                className="relative md:pr-12 md:pl-0 text-left md:even:text-right md:even:pr-0 md:even:pl-12"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 md:left-auto md:translate-x-0 md:translate-y-0 h-5 w-5 rounded-full bg-blue-500 border-4 border-white"></div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{item.institution}</p>
                <p className="text-sm text-blue-600 font-semibold mb-4">
                  {item.date}
                </p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;

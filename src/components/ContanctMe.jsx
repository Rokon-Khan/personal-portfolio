const ContactMe = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center my-10 py-5 bg-gray-100 px-4"
    >
      <div className="bg-white shadow-md rounded-lg p-8 max-w-5xl w-full">
        <h3 className="text-green-600 text-xl text-center font-semibold mb-2">
          Contact With Me
        </h3>
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
          Have a Project in Mind?
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Feel free to contact with me for any frontend project
        </p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Company (Optional)"
              className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Tell me about your project"
            className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-600 text-white rounded-md py-3 font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Contact Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;

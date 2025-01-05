const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-11/12 mx-auto">
      <div className="text-3xl font-bold">
        <span className="text-green-600">&lt;Md Rokonuzzaman/&gt;</span>
      </div>
      <nav className="mt-4 flex justify-between space-x-4">
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Home
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          About Me
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Skills
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Works
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Contact
        </a>
      </nav>
      <div>
        <button className="mt-6 px-6 py-3 bg-green-600 text-white font-bold rounded hover:bg-green-700">
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;

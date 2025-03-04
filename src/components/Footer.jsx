const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-4 px-6 flex md:flex-row justify-between  items-center flex-col  border-t border-gray-200">
      {/* Logo Section */}
      <div className="text-green-500 text-xl font-bold">&lt;Rokon/&gt;</div>

      {/* Contact Information */}
      <div className="flex items-center space-x-4 text-sm text-gray-600">
        <span className="text-xl font-bold">rokonjust@gmail.com</span>
        <span className="text-xl font-bold">+8801955767196</span>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/md.rokon.khan.04"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.437 9.878v-6.987h-2.54v-2.891h2.54v-2.208c0-2.507 1.493-3.891 3.777-3.891 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.882h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Rokon-Khan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.76-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.241 2.873.118 3.176.77.841 1.232 1.911 1.232 3.221 0 4.61-2.805 5.625-5.475 5.921.43.371.815 1.102.815 2.222v3.293c0 .322.217.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/md-rokonuzzaman-a8a9a41aa/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452H16.89v-5.554c0-1.325-.027-3.034-1.85-3.034-1.853 0-2.136 1.447-2.136 2.941v5.647h-3.557V9h3.415v1.561h.049c.476-.9 1.637-1.85 3.368-1.85 3.602 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433c-1.148 0-2.08-.937-2.08-2.084 0-1.15.932-2.087 2.08-2.087 1.152 0 2.084.937 2.084 2.087 0 1.147-.932 2.084-2.084 2.084zm1.788 13.019H3.548V9h3.577v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.978 0 1.775-.774 1.775-1.729V1.729C24 .774 23.203 0 22.225 0z" />
          </svg>
        </a>

        {/* WhatsApp */}
        <a
          href="https://whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-green-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48a11.868 11.868 0 00-8.52-3.48c-6.63 0-12 5.37-12 12 0 2.12.55 4.21 1.59 6.04L0 24l5.11-1.52a11.982 11.982 0 006.4 1.84c6.63 0 12-5.37 12-12 0-3.22-1.26-6.25-3.48-8.52zm-8.52 18c-1.8 0-3.55-.48-5.09-1.39l-.36-.21-3.03.9.91-2.97-.23-.37A9.932 9.932 0 012.03 12c0-5.51 4.47-10 10-10 2.67 0 5.18 1.04 7.07 2.93 1.89 1.89 2.93 4.4 2.93 7.07 0 5.51-4.48 10-10 10zm5.3-7.55c-.29-.14-1.72-.85-1.99-.95s-.46-.15-.66.15-.76.95-.93 1.14c-.17.19-.34.21-.63.07a8.33 8.33 0 01-2.45-1.5 9.154 9.154 0 01-1.7-2.1c-.18-.31-.02-.47.13-.62.14-.14.31-.34.47-.51.15-.17.2-.29.3-.48.1-.19.05-.36-.02-.5-.07-.14-.66-1.6-.91-2.21-.24-.58-.49-.5-.66-.51-.17-.01-.36-.01-.55-.01s-.5.07-.76.36c-.25.29-.99.97-.99 2.36s1.02 2.73 1.16 2.91c.14.19 1.97 3 4.77 4.2.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.72-.7 1.96-1.38.24-.69.24-1.28.17-1.4-.07-.12-.26-.19-.54-.33z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

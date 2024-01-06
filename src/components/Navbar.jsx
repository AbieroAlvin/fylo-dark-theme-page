import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className="bg-transparent md:px-4 w-full">
      <nav className="flex items-center justify-between font-headings md:py-6 md:px-8 p-4">
        {/* Logo */}
        <div className="md:scale-[.95] scale-[.75]">
          <img src={logo} alt="logo" />
        </div>
        {/* navigation */}
        <div className="px-2">
          <ul className="flex items-center md:gap-6 gap-4 md:text-[1rem] text-[14px]">
            <li className="text-white/50 hover:text-white">
              <a href="#">Features</a>
            </li>
            <li className="text-white/50 hover:text-white">
              <a href="#">Team</a>
            </li>
            <li className="text-white/50 hover:text-white">
              <a href="#">Sign In</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

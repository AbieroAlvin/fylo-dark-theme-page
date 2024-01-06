import Logo from "../assets/images/logo.svg";
import email from "../assets/images/icon-email.svg";
import phone from "../assets/images/icon-phone.svg";
import location from "../assets/images/icon-location.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full mx-auto flex items-center justify-center bg-footer">
      <div className="py-12 md:px-4 px-6 md:my-12 md:max-w-[1080px] w-full">
        <div className="md:mt-20 mt-24">
          <img src={Logo} alt="logo" className="mb-4" />
          <div className="text-[14px] text-white/70 font-body flex md:flex-row flex-col justify-between gap-6 w-full">
            <div className="flex md:gap-4 gap-2 md:w-[30%]">
              <img
                src={location}
                alt="location icon"
                className="h-[16px] w-[16px]"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <img
                  src={phone}
                  alt="phone icon"
                  className="h-[16px] w-[16px]"
                />
                <p>+1-543-123-4567</p>
              </div>
              <div className="flex gap-3">
                <img
                  src={email}
                  alt="email icon"
                  className="h-[16px] w-[16px]"
                />
                <p>example@fylo.com</p>
              </div>
            </div>
            <ul className="flex flex-col gap-3">
              <li className="hover:text-white hover:font-bold">
                <a href="#">About Us</a>
              </li>
              <li className="hover:text-white hover:font-bold">
                <a href="#">Jobs</a>
              </li>
              <li className="hover:text-white hover:font-bold">
                <a href="#">Press</a>
              </li>
              <li className="hover:text-white hover:font-bold">
                <a href="#">Blog</a>
              </li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li className="hover:text-white hover:font-bold">
                <a href="#">Contact Us</a>
              </li>
              <li className="hover:text-white hover:font-bold">
                <a href="#">Terms</a>
              </li>
              <li className="hover:text-white hover:font-bold">
                <a href="#">Privacy</a>
              </li>
            </ul>
            <div className="flex gap-3 md:h-[20%]">
              <div className="p-2 rounded-full border-[1px] border-white cursor-pointer">
                <FaFacebookF size={16} className="hover:text-Cyan" />
              </div>
              <div className="p-2 rounded-full border-[1px] border-white cursor-pointer">
                <FaTwitter size={16} className="hover:text-Cyan" />
              </div>
              <div className="p-2 rounded-full border-[1px] border-white cursor-pointer">
                <FaInstagram size={16} className="hover:text-Cyan" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

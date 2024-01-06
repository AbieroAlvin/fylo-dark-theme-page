import Navbar from "./Navbar";
import Intro from "./Intro";
import curvyMobile from "../assets/images/bg-curvy-mobile.svg";
import curvyDesk from "../assets/images/bg-curvy-desktop.svg";

const IntroSection = () => {
  return (
    <div className="w-full bg-intro">
      <div className="relative z-40">
        <Navbar />
        <Intro />
        <div className="absolute bottom-0 right-0 z-[-1]">
          <img src={curvyDesk} alt="/" className="md:flex hidden" />
          <img src={curvyMobile} alt="/" className="flex md:hidden" />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;

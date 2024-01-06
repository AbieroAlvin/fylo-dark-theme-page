import illustration from "../assets/images/illustration-stay-productive.png";
import { FaArrowRight } from "react-icons/fa6";

const Productive = () => {
  return (
    <div className="w-full mx-auto flex items-center justify-center bg-main">
      <div className="flex md:flex-row flex-col gap-6 md:max-w-[960px] w-full items-center py-12 md:px-0 px-6 md:my-12">
        <div className="md:p-0 p-2">
          <img src={illustration} alt="illustration stay productive" />
        </div>
        <div className="mt-4">
          <h2 className="font-headings font-bold text-white md:text-2xl text-xl">
            Stay productive, wherever you are
          </h2>
          <p className="font-body text-white/70 text-[14px] mt-3">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="font-body text-white/70 text-[14px] mt-3">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <div className="mt-3 cursor-pointer underline">
            <p className="flex items-center gap-2  text-[13px] text-Cyan">
              See how Fylo works
              <span className="bg-Cyan p-1  rounded-full">
                <FaArrowRight className="text-white" size={6} />
              </span>
            </p>
            <div className="md:w-[25.5%] w-[31%] h-[1px] bg-Cyan"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productive;

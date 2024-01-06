import illustration from "../assets/images/illustration-intro.png";

const Intro = () => {
  return (
    <div className="w-full md:my-12 my-6 z-20">
      <div className="flex flex-col items-center gap-4 my-12">
        {/* illustration */}
        <div className="px-6 md:px-0">
          <img src={illustration} alt="/" />
        </div>
        {/* details */}
        <div className="flex flex-col gap-6 items-center text-center">
          <div className="md:w-1/2 w-3/4">
            <h1 className="text-white font-bold font-headings md:text-3xl text-2xl">
              {" "}
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="text-white/70 mt-4 md:text-[1rem] text-[15px] font-body">
              {" "}
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers.
            </p>
          </div>
          <button className="bg-gradient-to-r from-Cyan to-Blue rounded-full md:w-1/4 w-3/4 p-2 text-white font-headings">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;

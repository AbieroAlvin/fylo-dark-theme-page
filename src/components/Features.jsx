import featuresData from "../data/features";

const Features = () => {
  return (
    <div className="bg-main w-full flex items-center justify-center">
      <div className="grid md:grid-cols-2 grid-cols-1 md:max-w-[800px] w-full md:gap-12 gap-8 py-12 md:px-0 px-6 md:my-12">
        {featuresData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col items-center justify-center"
          >
            <img src={data.image} alt="/" />
            <div className="text-center mt-2">
              <h2 className="text-xl text-white font-headings mb-2 font-bold">
                {data.heading}
              </h2>
              <p className="text-[14px] font-[400] font-body text-white/70">
                {data.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

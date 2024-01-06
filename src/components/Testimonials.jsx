import testimonialsData from "../data/testimonials";
import quotes from "../assets/images/bg-quotes.png";

const Testimonials = () => {
  return (
    <div className="w-full mx-auto flex items-center justify-center bg-main">
      <div className="md:py-12 pt-12 md:px-0 px-6 md:my-12 md:max-w-[960px] w-full flex md:flex-row flex-col gap-6 items-center relative z-40">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-testimonials rounded-lg pt-8 pb-4 px-4 shadow-lg md:w-full w-3/4 z-40"
          >
            <p className="text-[14px] font-body text-white/70 mb-4">
              {testimonial.text}
            </p>
            <div className="flex gap-2 items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full w-[30px] h-[30px]"
              />
              <div className=" flex flex-col ">
                <p className="text-[11px] text-white font-headings font-bold">
                  {testimonial.name}
                </p>
                <p className="text-[10px] text-white/70 font-body">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
        <img
          src={quotes}
          alt="quotes"
          className="absolute z-[-1] top-[1rem] md:left-[0] left-[16%] scale-[1]"
        />
      </div>
    </div>
  );
};

export default Testimonials;

import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    } else {
      console.log("Email is valid:", email);
    }
  };

  return (
    <div className="w-full mx-auto flex items-center justify-center bg-main ">
      <div className="py-12 md:px-0 px-6 md:my-8 md:max-w-[800px] w-full">
        <div className="bg-testimonials rounded-lg md:py-8 md:px-6  p-4  shadow-lg w-full flex flex-col items-center justify-center relative md:bottom-[-12rem] bottom-[-10rem]">
          <div className="text-center my-3">
            <h1 className="font-headings text-2xl md:text-3xl font-bold text-white mb-3">
              Get early access today
            </h1>
            <p className="font-body text-[13px] text-white/70 md:px-16">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>
          <form
            className="w-full flex md:flex-row flex-col gap-6 mb-3 md:items-center md:justify-center"
            onSubmit={handleFormSubmit}
          >
            <div className="md:w-[65%] flex flex-col justify-center">
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="email@example.com"
                className="px-6 py-2 bg-white outline-none rounded-full  w-full"
              />
              {error && (
                <p className="mt-1 pl-6 text-[12px] text-error">{error}</p>
              )}
            </div>

            <button className="rounded-full text-[13px] py-3 px-4 bg-gradient-to-r from-Cyan to-Blue text-white font-headings hover:opacity-90">
              Get Started For Free
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

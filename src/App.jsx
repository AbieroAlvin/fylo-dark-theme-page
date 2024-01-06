import Features from "./components/Features";
import Footer from "./components/Footer";
import Productive from "./components/Productive";
import Signup from "./components/Signup";
import Testimonials from "./components/Testimonials";
import IntroSection from "./components/IntroSection";

function App() {
  return (
    <div className="w-full h-full mx-auto bg-main">
      <IntroSection />
      <Features />
      <Productive />
      <Testimonials />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;

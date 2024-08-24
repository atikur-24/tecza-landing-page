import Achievements from "./components/Achievements/Achievements";
import Banner from "./components/Banner/Banner";
import ContactUs from "./components/ContactUs/ContactUs";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import GetInTouch from "./components/shared/GetInTouch/GetInTouch";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Achievements />
      <Projects />
      <Testimonials />
      <ContactUs />
      <GetInTouch />
    </div>
  );
};

export default App;

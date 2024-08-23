import Achievements from "./components/Achievements/Achievements";
import Banner from "./components/Banner/Banner";
import ContactUs from "./components/ContactUs/ContactUs";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Achievements />
      <Projects />
      <ContactUs />
    </div>
  );
};

export default App;

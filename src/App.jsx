import Achievements from "./components/Achievements/Achievements";
import Banner from "./components/Banner/Banner";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Achievements />
      <Projects />
    </div>
  );
};

export default App;

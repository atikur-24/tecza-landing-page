import Achievements from "./components/Achievements/Achievements";
import Banner from "./components/Banner/Banner";
import ContactUs from "./components/ContactUs/ContactUs";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import GetInTouch from "./components/shared/GetInTouch/GetInTouch";

const App = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Achievements />
      <Projects />
      {/* <ContactUs /> */}
      <GetInTouch />
      <p
        style={{
          paddingBlock: "50px",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque doloribus corporis debitis eligendi quia, facere voluptas porro velit. Esse eaque assumenda maxime illo cupiditate officia
        aliquam debitis! Neque saepe labore incidunt deleniti quisquam, fuga mollitia inventore amet porro placeat obcaecati veritatis animi veniam facilis, voluptatum eius nemo excepturi in vitae
        optio officia. Praesentium iure unde, architecto itaque delectus repellat possimus eius, inventore sunt labore ut veritatis natus cum iusto laborum saepe. Impedit rem excepturi nobis esse
        repudiandae, dolor voluptas debitis blanditiis reiciendis fugit tenetur adipisci natus, vitae ea numquam, officiis cumque minima. Iure aliquid cum similique, praesentium amet quis.
      </p>
    </div>
  );
};

export default App;

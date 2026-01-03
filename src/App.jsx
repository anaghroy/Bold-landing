import Aboutus from "./components/Aboutus";
import Navbar from "./components/Navbar";
import TopSection from "./components/TopSection";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <div>
      <Navbar />
      <TopSection />
      <Aboutus/>
      <Welcome/>
    </div>
  );
};

export default App;

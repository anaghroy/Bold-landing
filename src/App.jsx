import Aboutus from "./components/Aboutus";
import Navbar from "./components/Navbar";
import TopSection from "./components/TopSection";
import Types from "./components/Types";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <div>
      <Navbar />
      <TopSection />
      <Aboutus/>
      <Welcome/>
      <Types/>
    </div>
  );
};

export default App;

import Aboutus from "./components/Aboutus";
import Believe from "./components/Believe";
import Navbar from "./components/Navbar";
import TopSection from "./components/TopSection";
import Types from "./components/Types";
import Welcome from "./components/Welcome";
import { data1, data2 } from "./Data/believedata";

const App = () => {
  return (
    <div>
      <Navbar />
      <TopSection />
      <Aboutus/>
      <Welcome/>
      <Types/>
      <Believe data1= {data1} data2={data2}/>
    </div>
  );
};

export default App;

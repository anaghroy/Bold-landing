import Aboutus from "./components/Aboutus";
import Believe from "./components/Believe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Potential from "./components/Potential";
import Testimonial from "./components/Testimonial";
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
      <Testimonial/>
      <Potential/>
      <Footer/>
    </div>
  );
};

export default App;

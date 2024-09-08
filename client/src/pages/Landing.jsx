import Navbar from "../components/LandingComponents/Navbar";
import Hero from "../components/LandingComponents/Hero";
import Analytics from "../components/LandingComponents/Analytics";
import Newsletter from "../components/LandingComponents/Newsletter";
import Footer from "../components/LandingComponents/Footer";
import Videos from "../components/LandingComponents/Videos";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
const Landing = () => {
  const contract = useSelector((state) => state.user.contractInstance);
  console.log(contract)
  const [videos, setVideos] = useState([]);
  console.log(videos);
  useEffect(() => {
    const allvide = async () => {
      try {
        const arr = await contract.getALLVideos();
        // console.log(arr);
        setVideos(arr);
      }
      catch (e) {
        console.log(e)
      }
    };
    allvide();
  }, [contract]);
  console.log(videos)
  return (
    <div className="bg-gray-950">
      <Navbar />
      <Hero />
      <Videos videos={ videos} />
      {/* <Analytics /> */}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Landing;

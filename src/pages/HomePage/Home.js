import React, { useState } from "react";
import Header from "../../Components/common/Header/Header";
import Footer from "../../Components/common/Footer/Footer";
import TabOptions from "../../Components/common/TabOptions/TabOptions";
import DiningOut from "../../Components/DiningOut/DiningOut";
import NightLife from "../../Components/NightLife/NightLife";
import Delivery from "../../Components/Delivery/Delivery";
 
const Home = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <DiningOut />;
    case "Nightlife":
      return <NightLife />;
    default:
      return <div>Delivery</div>;
  }
};

export default Home;

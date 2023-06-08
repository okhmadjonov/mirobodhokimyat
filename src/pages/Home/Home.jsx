import React from "react";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import Cards from "./components/Cards/Cards";
import LastNews from "./components/LastNews/LastNews";
import Map from "./components/Map/Map";
import MeetingsSlider from "./components/MeetingsSlider/MeetingsSlider";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
const Home = () => {
  return (
    <div className="home">
      <HomeBanner />
      <Cards />
      <LastNews />
      <Map />
      <MeetingsSlider />
      <PhotoGallery />
    </div>
  );
};

export default Home;

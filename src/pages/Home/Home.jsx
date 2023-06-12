import React from "react";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import Cards from "./components/Cards/Cards";
import LastNews from "./components/LastNews/LastNews";
import Map from "./components/Map/Map";
import MeetingsSlider from "./components/MeetingsSlider/MeetingsSlider";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import Faq from "./components/Faq/Faq";
import Subscription from "../../components/Subscription/Subscription";
import VideoGallery from "./components/VideoGallery/VideoGallery";
import AskQuetion from "../../components/AskQuetion/AskQuetion";
import Contacts from "../../components/Contacts/Contacts";
import UsefullLinks from "../../components/UsefullLinks/UsefullLinks";
const Home = () => {
  return (
    <div className="home">
      <HomeBanner />
      <Cards />
      <LastNews />
      <Map />
      <MeetingsSlider />
      <PhotoGallery />
      <Faq />
      <Subscription />
      <VideoGallery />
      <AskQuetion />
      <Contacts />
      <UsefullLinks />
    </div>
  );
};

export default Home;

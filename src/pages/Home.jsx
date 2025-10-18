import React from "react";
import Video from "../components/home/Video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";

function Home() {
  return (
    <div className="text-white ">
      <div className="h-screen w-screen fixed ">
        <Video />
      </div>
      <div className="h-screen w-screen overflow-x-hidden relative flex flex-col justify-between">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
}

export default Home;

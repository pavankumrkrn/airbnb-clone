import React from "react";
import { Banner } from "../Banner/banner";
import BecomeHost from "../BecomeHost/BecomeHost";
import Discover from "../Discover/Discover";
import Explore from "../Explore/Explore";
import Anywhere from "../Live/Anywhere";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="container">
        <div className="row mt-5 mb-2">
          <div className="col-sm-12">
            <p className="h2 text-left">Explore Nearby</p>
          </div>
        </div>
        <Explore />
        <div className="row mt-5 mb-2">
          <div className="col-sm-12">
            <p className="h2 text-left">Live Anywhere</p>
          </div>
        </div>
        <Anywhere />
        <div className="mt-5">
          <BecomeHost />
        </div>
        <div className="row mt-5 mb-2">
          <div className="col-sm-12">
            <p className="h2 text-left">Discover Experiences</p>
            <p>Unique activities with local experts – in person or online.</p>
          </div>
        </div>
        <div className="mb-5">
          <Discover />
        </div>
      </div>
    </div>
  );
};

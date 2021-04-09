import React from "react";
import "./explore.css";
const cards = [];

const Explore = () => {
  return (
    <div className="row">
      {cards.map((i, index) => {
        return (
          <>
            <div className="col-sm-3 card noBorder" key={index}>
              <img src={i.image} alt="" className="card-img-top expImage" />
              <p className="h5 mt-2">{i.name}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Explore;

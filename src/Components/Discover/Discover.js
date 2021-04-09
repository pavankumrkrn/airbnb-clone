import React from "react";

const cards = [
  {
    name: "Online Experiences",
    des: "Live, interactive activities led by hosts.",
    image:
      "https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=720",
  },
  {
    name: "Experiences",
    des: "Local things to do, wherever you are.",
    image:
      "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=720",
  },
  {
    name: "Featured Collection: Wanderlust",
    des: "Travel from home with online experiences.",
    image:
      "https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=720",
  },
];

const Discover = () => {
  return (
    <div className="row">
      {cards.map((i, index) => {
        return (
          <>
            <div className="col-sm-4 card noBorder" key={index}>
              <img src={i.image} alt="" className="card-img-top expImage" />
              <p className="h5 mt-2">{i.name}</p>
              <p>{i.des}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Discover;

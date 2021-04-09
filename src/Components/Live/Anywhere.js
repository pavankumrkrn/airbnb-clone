import React from "react";

const cards = [
  {
    name: "Entire Homes",
    image:
      "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720",
  },
  {
    name: "Unique Stays",
    image:
      "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720",
  },
  {
    name: "Farms and Nature",
    image:
      "https://a0.muscache.com/im/pictures/7f254627-3922-4880-b8fa-545b8551117e.jpg?im_w=720",
  },
  {
    name: "Pets Allowed",
    image:
      "https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720",
  },
];

const Anywhere = () => {
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

export default Anywhere;

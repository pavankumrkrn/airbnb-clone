import React from "react";
import "./BecomeHost.css";

const BecomeHost = () => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card host noBorder">
          <div className="card-body">
            <div className="p-5 col-lg-5 col-md-5 col-sm-12">
              <h1 className="text-white">Become a Host</h1>
              <p className="h6 mt-3 text-white">
                Earn extra income and unlock new opportunities by sharing your
                space.
              </p>
              <button className="btn btn-light mt-5">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeHost;

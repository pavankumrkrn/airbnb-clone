import { Button } from "@material-ui/core";
import { DateRangePicker } from "react-date-range";
import React from "react";
import { People } from "@material-ui/icons";
import { useHistory } from "react-router";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Search } from "../Search/search";
import "./banner.css";
import "../Search/search.css";

export const Banner = (props) => {
  const { push } = useHistory();
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          variant="outlined"
          className="banner__searchButton"
          onClick={toggle}
        >
          Search Dates
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h6 className="mt-3">
          Plan a different kind of getaway to uncover the hidden gems near you
        </h6>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <Modal isOpen={modal} toggle={toggle} dialogClassName="modal">
            <ModalHeader toggle={toggle} charCode="X">
              Dates
            </ModalHeader>
            <ModalBody>
              <input type="date" className="form-control" />
              <div className="row justify-content-center">
                <div className="col-sm-12 text-center">
                  <form
                    action=""
                    onSubmit={(e) => {
                      push("/search");
                    }}
                  >
                    <input
                      type="number"
                      className="form-control mt-3"
                      min={0}
                      placeholder="Number of Guests"
                      required
                    />
                    <button className="mt-3 bttn btn" type="submit">
                      Search Airbnb
                    </button>
                  </form>
                </div>
              </div>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </div>
  );
};

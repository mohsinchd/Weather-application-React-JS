import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import GlobalContext from "../Context/GlobalContext";
const ModalInput = ({ showModal, onClose }) => {
  const [cityName, setCityName] = useState("lahore");

  const { fetchData } = useContext(GlobalContext);

  const handleInput = (event) => {
    setCityName(event.target.value);
  };

  const submitHandler = (e) => {
    fetchData(cityName);
    e.preventDefault();
    onClose();
  };

  return (
    <Modal show={showModal}>
      <ModalBody>
        <h1 className="title">Weather Application</h1>
        <form>
          <div className="form-group">
            <label htmlFor="city">Enter City Name</label>
            <input className="form-control" onChange={handleInput} />
          </div>
          <button className="btn btn-outline-dark mt-3" onClick={submitHandler}>
            Search
          </button>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default ModalInput;

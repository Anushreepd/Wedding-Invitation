import React from "react";
import groom from "../images/Abhay.jpeg";
import { useNavigate } from "react-router-dom";
import bride from "../images/Anu.jpeg";
import { IoIosStar } from "react-icons/io";
import WeadingDetails from "./WeadingDetails2";
import LocationDetails from "./LocationDetails";
import EventDetails from "./EventDetails";
const AllWeddingDetails = () => {
  return (
    <section className="section">
      <div className="container">
        <EventDetails/>
        <LocationDetails/>
      </div>
    </section>
  );
};

export default AllWeddingDetails;

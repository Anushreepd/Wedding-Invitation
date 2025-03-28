import React from "react";
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

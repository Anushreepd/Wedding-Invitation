import React from "react";
import Banner from "./Banner";
import ImageGalleryComponent from "./ImageGalleryComponent";
const CalendarAndGallary = () => {
  return (
    <section className="section">
      <div className="container">
      <div
        className="display-table center-text"
      >
        <Banner/>
        <ImageGalleryComponent/>
        <button
          className="redirect-button"
          onClick={() => navigate("/Invitation")}
        >
          INVITATION
        </button>
        </div>
      </div>
    </section>
  );
};

export default CalendarAndGallary;

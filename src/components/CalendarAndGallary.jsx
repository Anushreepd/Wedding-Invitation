import React from "react";
import Banner from "./Banner";
import ImageGalleryComponent from "./ImageGalleryComponent";
import ImageSlider from "./ImageSlider";
const CalendarAndGallary = () => {
  return (
    <section className="section">
      <div className="container">
      <div
        className="display-table center-text"
      >
        <Banner/>
        <ImageSlider/>
        </div>
      </div>
    </section>
  );
};

export default CalendarAndGallary;

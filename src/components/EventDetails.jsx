import React from "react";
import "./OurStory.css";
import { IoIosStar } from "react-icons/io";
import { GiDoubleNecklace } from "react-icons/gi";
import { MdOutlineMusicNote, MdOutlineCake } from "react-icons/md";

const EventDetails = () => {
  return (
    <section className="section w-details-area center-text">
      <div className="container">
        <div className="row">
        <div className="col-sm-10">
            <div className="heading">
              <h2 className="title">Wedding Details</h2>
              <span className="heading-bottom">
                <IoIosStar size={25} color="HotPink " />
              </span>
            </div>

            <div className="wedding-details margin-bottom">
              <div className="w-detail left">
                <MdOutlineCake color="HotPink" size={40} />
                <h3 className="title">RECEPTION</h3>
                <p>Sunday, May 18, 2025 <br/>
                Time: 7PM Onwards <br/>
                Urban Co-Operative Bank Samudaya Bhavan <br/>
                2nd Main Road, Vinobha Nagar, Davanagere</p>
              </div>
              <div className="w-detail left">
                <MdOutlineMusicNote color="HotPink" size={40} />
                <h3 className="title">SANGEETH</h3>
                <p>Sunday, May 18, 2025</p>
                <p>Time: 9PM Onwards</p>
                <p>Urban Co-Operative Bank Samudaya Bhavan</p>
                <p>2nd Main Road, Vinobha Nagar, Davanagere</p>
              </div>
              <div className="w-detail right">
                <GiDoubleNecklace color="HotPink" size={40} />
                <h3 className="title">WEDDING CEREMONY</h3>
                <p>Monday, May 19th, 2025</p>
                <p>Time: 9.30AM</p>
                <p>Urban Co-Operative Bank Samudaya Bhavan</p>
                <p>2nd Main Road, Vinobha Nagar, Davanagere</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;

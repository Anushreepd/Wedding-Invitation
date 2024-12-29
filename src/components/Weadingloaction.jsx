import React from "react";
import { GiDoubleNecklace } from "react-icons/gi";
import { IoIosStar } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import { GiStairsCake } from "react-icons/gi";
import { MdOutlineFoodBank, MdOutlineMusicNote, MdOutlineCake } from "react-icons/md";
import "../App.css";

const Weadingloaction = () => {
  return (
    <section className="section w-details-area center-text">
      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <div className="heading">
              <h2 className="title">Wedding Details</h2>
              <span className="heading-bottom">
                <IoIosStar size={25} color="HotPink " />
              </span>
            </div>

            <div className="wedding-details margin-bottom">
            <div className="w-detail left">
                <MdOutlineCake color="HotPink" size={40}/>
                <h3 className="title">RECEPTION</h3>
                <p>Sunday, May 18, 2025</p>
                <p>Time: 7PM Onwards</p>
                <p>Urban Co-Operative Bank Samudaya Bhavan</p>
                <p>2nd Main Road, Vinobha Nagar, Davanagere</p>
              </div>
            <div className="w-detail left">
                <MdOutlineMusicNote color="HotPink" size={40}/>
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
                <p>Time: 9.30AM </p>
                <p>Urban Co-Operative Bank Samudaya Bhavan</p>
                <p>2nd Main Road, Vinobha Nagar, Davanagere</p>
              </div>
            </div>

            <div className="heading">
            <p align="center">
            <h2 className="title">{<SiMinutemailer color="HotPink" size={30} />} Location Details</h2>
              </p>
              <span className="heading-bottom">
                <IoIosStar size={25} color="HotPink " />
              </span>
              <div className="map">
                      <div className="map-responsive">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d347.11648459242986!2d75.90984311952448!3d14.462434764473032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba25780d93d14d%3A0xe782570e623b8edf!2sUrban%20Co-Operative%20Bank%20Samudaya%20Bhavan%2C%20Davanagere!5e0!3m2!1sen!2sin!4v1735397234888!5m2!1sen!2sin"
                          width="600"
                          height="450"
                          frameBorder="0"
                          style={{ border: 2 }}
                        ></iframe>
                      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weadingloaction;

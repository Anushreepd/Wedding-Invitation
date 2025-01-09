import React from "react";
import "./OurStory.css";
import img3 from "../images/Wedding.jpeg";
import img2 from "../images/Engagement.jpeg";
import img1 from "../images/firstmeet.png";
import { IoIosStar } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { GiDoubleNecklace } from "react-icons/gi";
import { SiMinutemailer } from "react-icons/si";
import { MdOutlineMusicNote, MdOutlineCake } from "react-icons/md";

const WeadingDetails = () => {
  return (
    <section className="section w-details-area center-text">
      <div className="container">
        <div className="row">
          {/* Our Story Section */}
          <div className="col-sm-12">
            <div className="heading">
              <span>We Love Each Other</span>
              <h2 className="title">Our Story</h2>
              <p style={{ textAlign: "center", margin: "0px 25px"}}>
                To love a person is to see all of their magic, and to remind
                them of it when they have forgotten.
              </p>
              <p>Ah, life grows lovely where you are.</p>
              <span className="heading-bottom">
                <IoIosStar size={25} color="HotPink " />
              </span>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="col-md-12 col-md-offset-0">
            <ul className="timeline animate-box fadeInUp animated-fast">
              <li className="animate-box fadeInUp animated-fast">
                <div
                  className="timeline-badge"
                  style={{ backgroundImage: `url(${img1})` }}
                ></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title" style={{ color: "hotpink" }}>
                      First We Met
                    </h3>
                    <MdOutlineDateRange size={15} className="iconm" />
                    <span className="date" style={{ fontWeight: "bold" }}>
                      September 16, 2024
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      As it's an arranged marriage setup I met her in their home for the first time.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted animate-box fadeInUp animated-fast">
                <div
                  className="timeline-badge"
                  style={{ backgroundImage: `url(${img2})` }}
                ></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title" style={{ color: "hotpink" }}>
                      Engagement Ceremony
                    </h3>
                    <MdOutlineDateRange size={15} className="iconm" />
                    <span className="date" style={{ fontWeight: "bold" }}>
                      October 21, 2024
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      It was time when we realized that we wanted to spend the rest of your life with each other. We started the beginning of togetherness.
                    </p>
                  </div>
                </div>
              </li>
              <li className="animate-box fadeInUp animated-fast">
                <div
                  className="timeline-badge"
                  style={{ backgroundImage: `url(${img3})` }}
                ></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title" style={{ color: "hotpink" }}>
                      Wedding Day
                    </h3>
                    <MdOutlineDateRange size={15} className="iconm" />
                    <span className="date" style={{ fontWeight: "bold" }}>
                      May 19, 2025
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      The greatest marriages are built on teamwork. A mutual respect, a healthy dose of admiration, and a never-ending portion of love and grace.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <span className="heading-bottom">
              <IoIosStar size={25} color="HotPink " />
              <IoIosStar size={25} color="HotPink " />
              <IoIosStar size={25} color="HotPink " />
              <IoIosStar size={25} color="HotPink " />
              <IoIosStar size={25} color="HotPink " />
            </span>
          </div>

          {/* Wedding Details Section */}
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

            <div className="heading">
              <p align="center">
                <h2 className="title">
                  <SiMinutemailer color="HotPink" size={30} />
                  Location Details
                </h2>
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

export default WeadingDetails;

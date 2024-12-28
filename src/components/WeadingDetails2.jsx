import React from "react";
import "./OurStory.css";
import img3 from "../images/Wedding.jpeg";
import img2 from "../images/Engagement.jpeg";
import img1 from "../images/firstmeet.png";
import { IoIosStar } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
const WeadingDetails = () => {
  return (
    <section className="section w-details-area center-text">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="heading">
              <span>We Love Each Other</span>

              <h2 className="title">Our Story</h2>
              <p>
                To love a person is to see all of their magic, and to remind
                them of it when they have forgotten.
              </p>
              <p>Ah, life grows lovely where you are.</p>
              <span className="heading-bottom">
                <IoIosStar size={25} color="HotPink " />
              </span>
            </div>
          </div>
          <div className="col-md-12 col-md-offset-0">
            <ul className="timeline animate-box fadeInUp animated-fast">
              <li className="animate-box fadeInUp animated-fast">
                <div
                  className="timeline-badge"
                  style={{ backgroundImage: `url(${img1})` }}
                ></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">First We Met</h3>
                    <MdOutlineDateRange size={15} className="iconm" />
                    <span className="date">June 22, 2023</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      After 2 hours of drive we met in her home with full of
                      family members and it is how all started.
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
                    <h3 className="timeline-title">Engagement Ceremony</h3>
                    <MdOutlineDateRange size={15} className="iconm" />
                    <span className="date">July 16, 2023</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      It was time when we realized that we wanted to spend the
                      rest of your life with each other. We started the
                      beginning of togetherness.
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
                    <h3 className="timeline-title">Wedding Day</h3>
                    <MdOutlineDateRange size={15} className="iconm" />
                    <span className="date">Dec 20, 2023</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      The greatest marriages are built on teamwork. A mutual
                      respect, a healthy dose of admiration, and a never-ending
                      portion of love and grace.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeadingDetails;

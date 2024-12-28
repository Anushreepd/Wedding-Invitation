import React from "react";
import { GiLinkedRings } from "react-icons/gi";
import { IoIosStar } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import { GiStairsCake } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import "../App.css";

const Weadingloaction = () => {
  return (
    <section className="section w-details-area center-text">
      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <div className="heading">
              <h2 className="title">Wedding & Reception Details</h2>
              <span className="heading-bottom">
                <IoIosStar size={25} color="HotPink " />
              </span>
            </div>

            <div className="wedding-details margin-bottom">
              <div className="w-detail right">
                <GiLinkedRings color="HotPink" size={40} />
                <h3 className="title">WEDDING CEREMONY</h3>
                <p>Wednesday, December 20th, 2023</p>
                <p>Sukhakarta Lawns</p>
                <p>
                  <SiMinutemailer color="HotPink" size={40} />
                </p>
                <p>Nepti,Ahmednagar-Pune Bypass-road</p>
                <p>
                  <div className="map">
                    <div className="map-responsive">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14130.174784936687!2d74.6939746!3d19.0978005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x259f7869cdb9ac50!2sSUKHAKARTA%20LAWNS!5e0!3m2!1sen!2sin!4v1569310856411!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        frameBorder="0"
                        style={{ border: 0 }}
                      ></iframe>
                    </div>
                  </div>
                </p>
              </div>

              <div className="w-detail left">
                <GiStairsCake size={40} color="HotPink" />
                <h3 className="title">RECEPTION PARTY</h3>
                <p>Friday, December 27, 2023</p>
                <p>Malhar Nivas</p>
                <p>
                  <SiMinutemailer color="HotPink" size={40} />
                </p>
                <p> Deolali Pravara, Ahmednagar, Maharsahtra</p>
                <p>
                  <div className="map">
                    <div className="map-responsive">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.692929779932!2d74.6466132!3d19.4679943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc927b832c3573%3A0x3beb397a4419b9b2!2sDeolali%20Pravara%2C%20Maharashtra%20413716!5e0!3m2!1sen!2sin!4v1569310856411!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                      ></iframe>
                    </div>
                  </div>
                </p>
              </div>

              <div className="w-detail left">
                <MdOutlineFoodBank color="HotPink" size={40} />
                <h4 className="title">DINNER</h4>
                <p>Time: 7PM Onwards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weadingloaction;

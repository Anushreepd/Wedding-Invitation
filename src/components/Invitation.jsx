import React from "react";
import { IoIosStar } from "react-icons/io";
import WeadingDetails from "./WeadingDetails2";
import LocationDetails from "./LocationDetails";
import EventDetails from "./EventDetails";

const Invitation = () => {
  return (
    <section className="section w-details-area center-text">
      <div className="container">
        <div className="row">
          <div className="col-sm-1">
            <div className="col-sm-10">
              <div className="heading">
                <h2>Hello!</h2>
                <p
                  style={{
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  We invite you to be with us as we celebrate our new life
                  together
                </p>
                <span className="heading-bottom">
                  <IoIosStar size={25} color="HotPink " />
                </span>
              </div>

              <div className="couple-wrap">
                <div className="couple-half">
                  <div className="groom">
                    <img
                      src="/images/Abhay.jpeg" 
                      alt="groom"
                      className="img-responsive"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        objectFit: "contain", // Adjust the image to cover without distortion
                      }}
                    />
                  </div>
                  <div className="desc-groom">
                    <h3>Abhay Basutkar</h3>
                    <p
                      style={{
                        color: "rgb(58, 29, 41)",
                        fontFamily: '"Playball", cursive',
                        fontSize: "1em",
                      }}
                    >
                      S/O Shashikant Basutkar and <br />
                      Seema Basutakar
                    </p>
                  </div>
                </div>
                <p className="center-text heartp">
                  <svg className="heart" viewBox="0 0 32 29.6">
                    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
                  </svg>
                </p>
                <div className="couple-half">
                  <div className="bride">
                    <img
                      src="/images/Anu.jpeg"
                      alt="bride"
                      className="img-responsive"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        objectFit: "contain", // Adjust the image to cover without distortion
                      }}
                    />
                  </div>
                  <div className="desc-bride">
                    <h3>Anushree Putankar</h3>
                    <p
                      style={{
                        color: "rgb(58, 29, 41)",
                        fontFamily: '"Playball", cursive',
                        fontSize: "1em",
                      }}
                    >
                      D/O Devaraj Putankar and Vidya Putankar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WeadingDetails />
           <EventDetails/>
           <LocationDetails/>
    </section>
  );
};

export default Invitation;

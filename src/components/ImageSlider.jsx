import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import city1 from "/images/firstmeet.png";
import city2 from "/images/Engagement.jpeg";
import city3 from "/images/Wedding.jpeg";
import planet1 from "/images/Engagement.jpeg";
import planet2 from "/images/Wedding.jpeg";
import { useNavigate } from "react-router-dom";

const ImageSlider = () => {
  const navigate = useNavigate();
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

   useEffect(() => {
      const interval = setInterval(() => {
        setPositionIndexes((prevIndexes) => {
          const updatedIndexes = prevIndexes.map(
            (prevIndex) => (prevIndex + 1) % 5
          );
          return updatedIndexes;
        });
      }, 1200);
  
      return () => clearInterval(interval);
    }, []);

  const images = [city1, city2, city3, planet1, planet2];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  return (
    <div style={{display: "grid"}}>
      <br/>
      <br/>
      <br/>
      <h2 style={{
            color: "black",
            textAlign: "center",
          }}> Memory Lane </h2>
          <br/>
        <div style={{display:"flex", justifyContent: "center"}} >
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="rounded-[20px]"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "40%", position:"absolute" }}
        />
      ))}
    </div>
    </div>
  );
};

export default ImageSlider;
import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import WeadingDate from "./components/WeadingDate";
import Invitation from "./components/Invitation";
import AllWeddingDetails from "./components/AllWeddingDetails";

const App = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.muted = false; // Ensure audio starts unmuted
        audioRef.current
          .play()
          .then(() => setIsMuted(false)) // ✅ Update state to reflect actual audio status
          .catch((error) => console.log("Autoplay blocked:", error));
      }
    };
  
    playAudio();
  }, []);
  

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <Router>
      {/* 🎵 Global Audio Player */}
      <audio ref={audioRef} autoPlay loop>
        <source src="/audio/AajSajeya.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/* 🔊 Mute/Unmute Button (Only Icon) */}
      <button
        onClick={toggleMute}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "none",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
          color: "rgba(255, 255, 255, 0.7)", // Light color
          zIndex: 9999,
        }}
      >
        {isMuted ? "🔇" : "🔊"}
      </button>

      {/* App Routes */}
      <Routes>
        <Route path="/" element={<WeadingDate />} />
        <Route path="/Banner" element={<Banner />} />
        <Route path="/Invitation" element={<Invitation />} />
        <Route path="/AllWeddingDetails" element={<AllWeddingDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

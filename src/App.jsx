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
    const enableAudio = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.play().catch(() => {}); // Ignore errors
      }
      // Remove listener after first interaction
      window.removeEventListener("click", enableAudio);
      window.removeEventListener("touchstart", enableAudio);
    };

    // Attach listener for first user interaction
    window.addEventListener("click", enableAudio);
    window.addEventListener("touchstart", enableAudio);

    return () => {
      window.removeEventListener("click", enableAudio);
      window.removeEventListener("touchstart", enableAudio);
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.muted = false;
        audioRef.current
          .play()
          .then(() => setIsMuted(false)) // Ensure state updates properly
          .catch((error) => console.log("Playback error:", error));
      } else {
        audioRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

  return (
    <Router>
      {/* 🎵 Global Audio Player */}
      <audio ref={audioRef} autoPlay loop playsInline>
        <source src="/audio/AajSajeya.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/* 🔊 Mute/Unmute Button */}
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
          color: "rgba(255, 255, 255, 0.7)",
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

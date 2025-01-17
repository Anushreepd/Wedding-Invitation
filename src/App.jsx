import "./App.css";
import Banner from "./components/Banner";
import WeadingDate from "./components/WeadingDate";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Invitation from "./components/Invitation";
import WeadingDetails from "./components/WeadingDetails2";
import LocationDetails from "./components/LocationDetails";
import AllWeddingDetails from "./components/AllWeddingDetails";
import Contact from "./components/Contact";


const App = () => {
  return (
    // Wrap the entire app in the Router

      <Router>
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
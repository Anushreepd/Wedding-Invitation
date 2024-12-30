import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import WeadingDate from "./components/WeadingDate";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountDown from "./components/CountDown";
import Invitation from "./components/Invitation";
import Weadingloaction from "./components/Weadingloaction";
import WeadingDetails from "./components/WeadingDetails2";
import Contact from "./components/Contact";


const App = () => {
  return (
    // Wrap the entire app in the Router
    <Router>
      <Routes>
      <Route path="/" element={<WeadingDate />} />
        <Route path="/Banner" element={<Banner />} />
        <Route path="/CountDown" element={<CountDown />} />
        <Route path="/Invitation" element={<Invitation />} />
        <Route path="/Weadingloaction" element={<Weadingloaction />} />
        <Route path="/WeadingDetails" element={<WeadingDetails />} />

      </Routes>
    </Router>
  );
};

export default App;
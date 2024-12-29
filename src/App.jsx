import "./App.css";
import Header from "./components/Header";
import WeadingDate from "./components/WeadingDate";
import CountDown from "./components/CountDown";
import Invitation from "./components/Invitation";
import Weadingloaction from "./components/Weadingloaction";
import WeadingDetails from "./components/WeadingDetails2";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      {/* <Header /> */}  
      <WeadingDate />
      <CountDown />
      <Invitation />
      <Weadingloaction />
      <WeadingDetails />
      {/* <Contact /> */}
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/NavBar";
import { Col, Row } from "reactstrap";
import SideNav from "./Components/SideNav";
import MainContent from "./Components/MainContent";

function App() {
  return (
    <>
      <Navbar />
      <SideNav />
      <MainContent />
    </>
  );
}

export default App;

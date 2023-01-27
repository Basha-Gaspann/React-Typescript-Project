import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Accordion from "./Components/Accordion";

import Login from "./Components/Login";
import ResourceData from "./Components/ResourceDashboard/ResourceData";
// import Sign from "./Components/Sign";
import Signup from "./Components/Signup";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Sign/> */}

        <Route path="/" element={<Accordion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resourceData" element={<ResourceData />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

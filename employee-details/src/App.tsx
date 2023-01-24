import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./App.css";
import Accordion from "./Components/Accordion";
import Login from "./Components/Login";
import ResourceData from "./Components/ResourceDashboard/ResourceData";
import Signup from "./Components/Signup";

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accordion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resourceData" element={<ResourceData />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

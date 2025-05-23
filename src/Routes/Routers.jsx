import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Doctors from "../Pages/Doctors/Doctors";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Services from "../Pages/Services";
import DoctorsDetails from "../Pages/Doctors/DoctorsDetails";
import AppointmentDetails from "../Pages/Doctors/AppointmentDetails";
import SidePanel from "../Pages/Doctors/SidePanel";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorsDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/side-panel" element={<SidePanel />} />
      <Route
        path="/appointment-details"
        element={<AppointmentDetails />}
      />{" "}
      {/* New route */}
    </Routes>
  );
};

export default Routers;

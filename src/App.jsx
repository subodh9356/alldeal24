import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Properties from "./pages/Properties";
import Vehicles from "./pages/Vehicles";
import Services from "./pages/Services";
import Users from "./pages/Users";
import ManageUsers from "./pages/ManageUsers"; // 👈 Import at the top
import ManageCars from "./pages/ManageCars";
import ManageBikes from "./pages/ManageBikes"
import ManageCommVehicles from "./pages/ManageCommVehicles"
import ManagePhones from "./pages/ManagePhones";
import PropertyList from "./pages/PropertyList";
import LoanServices from "./pages/LoanServices"
import ServiceDetails from"./pages/ServiceDetails";


const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div style={{
        marginLeft: collapsed ? "70px" : "240px",
        padding: "20px",
        transition: "margin-left 0.3s ease",
        fontFamily: "Poppins, sans-serif",
        minHeight: "100vh",
        backgroundColor: "#f4f6f8"
      }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/services" element={<Services />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/manage-cars" element={<ManageCars/>} />
          <Route path="/manage-bikes" element={<ManageBikes/>} />
          <Route path="/manage-coomercial-vehicles" element={<ManageCommVehicles/>} />
          <Route path="/manage-phones" element={<ManagePhones/>}/>
          <Route path="/properties/:subcategory" element={<PropertyList />} />
          <Route path="/loan-services" element={<LoanServices />} />
          <Route path="/service-details/:id" element={<ServiceDetails />} />


        </Routes>
      </div>
    </Router>
  );
};

export default App;
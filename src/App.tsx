import { Routes, Route } from "react-router-dom";
import Homepage from "./frontend/pages/Homepage";
import Error404 from "./frontend/pages/Error404";
import React from "react";
import UpdateProfile from "./frontend/pages/UpdateProfile";
import Dashboard from "./frontend/dashboard/adminDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
      </Routes>
    </>
  );
}

export default App;

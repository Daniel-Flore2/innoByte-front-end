import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../components/DashboardAdmin";
import Login from "../components/LoginAdmin";
// import Add from "../components/AddCandidatos";
import Votaciones from "../views/VotacionesList";
import AddCandidatos from "../views/AddCandidatos";
import UserPolcadot from "../views/UserPolcadot";
// import ImportCSV from "../components/ImportCSV";
// import SignUp from "../components/SignUp";

function MainPage() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/dashboard/" element={<Dashboard></Dashboard>}>
            <Route index element={<AddCandidatos />} />
            <Route path="votacionesviews" element={<Votaciones />} />
            <Route path="userpolcadot" element={<UserPolcadot></UserPolcadot>}></Route>
            <Route path="*" element={<Navigate replace to="/dashboard" />} />
          </Route>
          {/* <Route path="/signup" element={<SignUp></SignUp>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainPage;
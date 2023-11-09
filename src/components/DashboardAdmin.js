import React from "react";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <Navbar></Navbar>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl mb-4">Votar por Partidos Políticos</h1>

      </div>
    </div>
  );
};

export default Dashboard;

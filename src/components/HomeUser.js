import React from 'react';
import backgroundImage from '../assets/bg_home.jpeg'; // Reemplaza con la ruta de tu imagen de fondo

function HomeUser() {
  return (
    <div className="bg-cover bg-opacity-60 h-screen flex flex-col items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl mb-4">INICIO DE SESIÓN</h1>
        <div className="flex gap-4 justify-center">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Login User
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeUser;

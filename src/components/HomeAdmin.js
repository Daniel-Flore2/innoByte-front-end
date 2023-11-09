import React, { useState } from 'react';
import Swal from 'sweetalert2';
import backgroundImage from '../assets/bg_home.jpeg';

function HomeAdmin() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleLoginAdminClick = () => {
    Swal.fire({
      title: 'Inicio de Sesión',
      text: 'Sesión de administrador iniciada',
      icon: 'success',
      confirmButtonText: 'OK',
    });
    // Puedes agregar aquí la lógica de inicio de sesión para el administrador si es necesario.
  };

  return (
    <div className="bg-cover bg-opacity-60 h-screen flex flex-col items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl mb-4">INICIO DE SESIÓN</h1>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLoginAdminClick}>
            Login Admin
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeAdmin;

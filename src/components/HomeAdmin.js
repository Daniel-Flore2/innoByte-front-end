import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import backgroundImage from "../assets/bg_login.jpg";

function HomeAdmin() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginClick = () => {
    // Aquí puedes realizar la autenticación con tu API
    // Si la autenticación falla, muestra una alerta de error
    const authenticationSuccess = false; // Reemplaza con la lógica de autenticación

    if (!authenticationSuccess) {
      Swal.fire({
        icon: 'error',
        title: 'Error de autenticación',
        text: 'Credenciales incorrectas. Por favor, intenta de nuevo.',
      });
    } else {
      // Si la autenticación es exitosa, puedes redirigir a la siguiente página
      window.location.href = "/dashboard"; // Reemplaza con tu ruta de redirección
    }
  };

  return (
    <div className="bg-white font-family-karla h-screen">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');

          .font-family-karla {
            font-family: karla;
          }
        `}
      </style>
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            <a href="#" className="bg-black text-white font-bold text-xl p-4">
              InnoByte
            </a>
          </div>

          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl">Bienvenido</p>
            <p className="text-center ">
              Inicia Sesión para acceder a la plataforma
            </p>
            <form
              className="flex flex-col pt-3 md:pt-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col pt-4">
                <label htmlFor="email" className="text-lg">
                  Correo
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="ejemploemail@email.com"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="flex flex-col pt-4 relative">
                <label htmlFor="password" className="text-lg">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    placeholder="Contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <div
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-500 w-5" />
                    ) : (
                      <FaEye className="text-gray-500 w-5" />
                    )}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleLoginClick}
                className="bg-black shadow-xl text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8 rounded-md"
              >
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>

        <div className="w-1/2 shadow-2xl">
          <img
            className="object-cover w-full h-screen hidden md:block"
            src={backgroundImage}
            alt="Background"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeAdmin;

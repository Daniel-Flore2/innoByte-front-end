import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import backgroundImage from "../assets/bg_login.jpg";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function HomeAdmin() {
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const petitionPost = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      switch (result.error) {
        case "User not found":
        case "Unverified user":
        case "Invalid password":
          Swal.fire({
            title: "Error!",
            text: result.error,
            icon: "error",
            confirmButtonText: "Ok",
          });
          break;

        default:
          Navigate("/dashboard");
          break;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
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
            <a
              href="/"
              className="bg-yellow-500 text-white font-bold text-xl p-4 rounded-lg"
            >
              InnoByte
            </a>
          </div>

          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <h1 className="mb-8 text-4xl font-extrabold leading-tight lg:text-6xl text-dark-grey-900 text-center">
              ¡Bienvenido!
            </h1>
            <p className="mb-6 text-base font-normal text-center text-grey-900">
              Inicia Sesión para acceder a la plataforma
            </p>
            <form
              className="flex flex-col pt-3 md:pt-8"
              onSubmit={handleSubmit(petitionPost)}
            >
              <div className="flex flex-col pt-4">
                <label htmlFor="email" className="text-lg">
                  Correo
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="ejemploemail@email.com"
                  {...register("email", { required: true })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.email && (
                  <p className="text-red-500">Correo requerido</p>
                )}
              </div>

              <div className="flex flex-col pt-4 relative">
                <label htmlFor="password" className="text-lg">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    {...register("password", { required: true })}
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
                {errors.password && (
                  <p className="text-red-500">Contraseña requerida</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-green-400 shadow-xl text-gray-900 font-bold text-lg hover:bg-green-500 p-2 mt-8 rounded-md"
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

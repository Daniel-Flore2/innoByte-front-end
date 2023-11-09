import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import credencial from "../assets/credencial-modeloEG.png";

function UserValidation() {
  const [cic, setCIC] = useState("");
  const [ciudadanoId, setCiudadanoId] = useState("");
  const navigate = useNavigate();

  const handleConsultInfo = () => {
    axios
      .get("/api/validate")
      .then((response) => {
        if (response.data.valid) {
          Swal.fire({
            icon: "success",
            title: "¡Datos válidos!",
            text: "Tu CIC y Ciudadano ID han sido verificados correctamente.",
            showConfirmButton: false,
            timer: 2000,
          });

          setTimeout(() => {
            navigate("/preview");
          }, 2000);
        } else {
          Swal.fire({
            icon: "error",
            title: "Datos inválidos",
            text: "El CIC o Ciudadano ID ingresados no son válidos.",
          });
        }

        setCIC(response.data.cic);
        setCiudadanoId(response.data.ciudadanoId);
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Error al consultar",
          text: "Ocurrió un error al intentar verificar tus datos. Por favor inténtalo nuevamente.",
        });
      });
  };

  return (
    <div className="relative py-8 overflow-hidden isolate sm:py-12 lg:py-20" class="bg-custom-pink">
      <h1 className="mb-4 text-4xl font-bold text-center text-black">
        Bienvenidos a las votaciones
      </h1>
      <p className="mb-12 text-center text-black">
        Las votaciones estarán abiertas de 8 am a 8 pm
      </p>

      <div className="flex flex-col items-center justify-center px-6 mx-auto lg:flex-row max-w-7xl lg:px-8">
        <div className="lg:w-1/2">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight text-left text-black sm:text-4xl">
              Validar tu identificación
            </h2>
            <p className="mt-4 text-lg leading-8 text-left text-gray-300">
              Sólo con las credenciales vigentes pueden votar.
            </p>
            <div className="flex flex-col max-w-md mt-6 gap-y-4">
              <label htmlFor="cic" className="text-left text-black">
                CÓDIGO DE IDENTIFICACIÓN DE LA CREDENCIAL (CIC):
              </label>
              <input
                id="cic"
                type="text"
                value={cic}
                onChange={(e) => setCIC(e.target.value)}
                className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Escribe tu CIC tal como aparece en tu credencial, incluyendo los ceros a la izquierda (0)"
              />
              <label htmlFor="ciudadanoId" className="text-left text-black">
                IDENTIFICADOR DEL CIUDADANO:
              </label>
              <input
                id="ciudadanoId"
                type="text"
                value={ciudadanoId}
                onChange={(e) => setCiudadanoId(e.target.value)}
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Escribe tu Identificador de Ciudadano tal como aparece en tu credencial, incluyendo los ceros a la izquierda (0)"
              />
            </div>
            <div className="mt-6 text-center">
              <button
                onClick={handleConsultInfo}
                className="px-4 py-2 text-sm font-semibold text-black bg-indigo-500 rounded-md hover-bg-indigo-400 focus-visible-outline focus-visible-outline-2 focus-visible-outline-offset-2 focus-visible-outline-indigo-500"
              >
                Validar Información
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="max-w-full mx-auto">
            <img
              src={credencial}
              alt="Imagen Credencial"
              className="max-h-full mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserValidation;

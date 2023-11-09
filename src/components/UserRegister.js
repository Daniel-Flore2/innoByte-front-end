import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import credencial from "../assets/credencial-modeloEG.png";

function UserValidation() {
  const [cic, setCIC] = useState('');
  const [ciudadanoId, setCiudadanoId] = useState('');

  const handleConsultInfo = () => {
    axios.get('/api/validate')
      .then(response => {
        if (response.data.valid) {
          Swal.fire({
            icon: 'success',
            title: '¡Datos válidos!',
            text: 'Tu CIC y Ciudadano ID han sido verificados correctamente.',
            showConfirmButton: false, // No muestra el botón de confirmación
            timer: 2000 // Cerrar automáticamente después de 2 segundos
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Datos inválidos',
            text: 'El CIC o Ciudadano ID ingresados no son válidos.'
          });
        }

        setCIC(response.data.cic);
        setCiudadanoId(response.data.ciudadanoId);
      })
      .catch(error => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error al consultar',
          text: 'Ocurrió un error al intentar verificar tus datos. Por favor inténtalo nuevamente.'
        });
      });
  }

  return (
    <div className="relative py-16 overflow-hidden bg-gray-900 isolate sm:py-24 lg:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="relative max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Validar tu identificación
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Sólo con las credenciales vigentes pueden votar.
            </p>
            <div className="flex max-w-md mt-6 gap-x-4">
              <label htmlFor="cic" className="text-white">
                CÓDIGO DE IDENTIFICACIÓN DE LA CREDENCIAL (CIC):
              </label>
              <input
                id="cic"
                type="text"
                value={cic}
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Escribe tu CIC tal como aparece en tu credencial, incluyendo los ceros a la izquierda (0)"
              />
            </div>
            <div className="flex max-w-md mt-6 gap-x-4">
              <label htmlFor="ciudadanoId" className="text-white">
                IDENTIFICADOR DEL CIUDADANO:
              </label>
              <input
                id="ciudadanoId"
                type="text"
                value={ciudadanoId}
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Escribe tu Identificador de Ciudadano tal como aparece en tu credencial, incluyendo los ceros a la izquierda (0)"
              />
            </div>
            <div className="mt-6">
              <button
                onClick={handleConsultInfo}
                className="px-4 py-2 text-sm font-semibold text-white bg-indigo-500 rounded-md hover-bg-indigo-400 focus-visible-outline focus-visible-outline-2 focus-visible-outline-offset-2 focus-visible-outline-indigo-500"
              >
                Consultar Información
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            {/* Rest of the content... */}
          </dl>
        </div>
      </div>
      <div
        className="absolute top-0 -translate-x-1/2 left-1/2 -z-10 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div className="absolute inset-y-0 right-0 hidden w-1/3 lg:block">
        <div className="flex items-center h-full">
          <img
            src={credencial}
            alt="Imagen Mediana"
            className="max-h-full mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default UserValidation;

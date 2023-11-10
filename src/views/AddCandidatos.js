import React, { useState } from "react";
import img from "../assets/bg_login.jpg";
import CardCandidatos from "./CardsCandidatos";
import Swal from "sweetalert2";

const AddCandidatos = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleApellidosChange = (e) => {
    setApellidos(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("URL_api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          apellidos,
          partido: selectedOption,
        }),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Candidato añadido con éxito",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `Error al añadir el candidato: ${response.statusText}`,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Error en la solicitud POST: ${error.message}`,
      });
    }

    closeModal();
  };
  return (
    <div className="container flex flex-col mx-auto bg-white p-10">
      <div className="grid w-full grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5">
        <div className="flex flex-col justify-center col-span-1 text-center lg:text-start">
          <div className="flex items-center justify-center mb-4 lg:justify-normal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
            >
              <path d="M96 80c0-26.5 21.5-48 48-48H432c26.5 0 48 21.5 48 48V384H96V80zm313 47c-9.4-9.4-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L409 161c9.4-9.4 9.4-24.6 0-33.9zM0 336c0-26.5 21.5-48 48-48H64V416H512V288h16c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336z" />
            </svg>
            <h4 className="ml-2 text-sm font-bold tracking-widest text-primary uppercase">
              Bienvenido
            </h4>
          </div>
          <h1 className="mb-8 text-4xl font-extrabold leading-tight lg:text-6xl text-dark-grey-900">
            Administración de Candidatos
          </h1>
          <p className="mb-6 text-base font-normal leading-7 lg:w-3/4 text-grey-900">
            Bienvenido al panel de administración de candidatos. En esta
            sección, puedes agregar nuevos candidatos que representarán a
            distintos partidos políticos en las elecciones de México.
          </p>
          <p className="mb-6 text-base font-normal leading-7 lg:w-3/4 text-grey-900">
            Recuerda que la integridad y precisión de la información es crucial
            para garantizar unas elecciones justas y transparentes. Revisa
            cuidadosamente la información antes de confirmar la adición de un
            nuevo candidato.
          </p>
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <button
              onClick={openModal}
              className="flex items-center py-4 text-sm font-bold text-gray-900 px-7 bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-purple-blue-100 transition duration-300 rounded-xl"
            >
              Agregar Candidato
            </button>
          </div>
        </div>
        <div className="items-center justify-end hidden col-span-1 md:flex">
          <img className="w-4/5 rounded-md" src={img} alt="header image" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 my-5"></div>
      {modalIsOpen && (
        <div
          className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0"
          id="modal"
        >
          <div
            role="alert"
            className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
          >
            <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
              <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
                Agregar Candidato
              </h1>
              <form onSubmit={handleFormSubmit}>
                <label
                  htmlFor="nombre"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  Nombre(s)
                </label>
                <input
                  id="nombre"
                  value={nombre}
                  onChange={handleNombreChange}
                  className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="Nombre"
                  required
                />
                <label
                  htmlFor="apellidos"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  Apellidos
                </label>
                <input
                  id="apellidos"
                  value={apellidos}
                  onChange={handleApellidosChange}
                  className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="Apellidos"
                  required
                />
                <label
                  htmlFor="select"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  Partido
                </label>
                <select
                  id="select"
                  value={selectedOption}
                  onChange={handleSelectChange}
                  className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  required
                >
                  <option value="opcion1">PRI</option>
                  <option value="opcion2">MORENA</option>
                  <option value="opcion3">VERDE</option>
                  <option value="opcion4">PAN</option>
                  <option value="opcion5">PRD</option>
                  <option value="opcion6">PT</option>
                </select>
                <div className="flex items-center justify-start w-full">
                  <button
                    type="submit"
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-green-600 bg-green-500 rounded text-white px-8 py-2 text-sm"
                  >
                    Añadir
                  </button>
                  <button
                    onClick={closeModal}
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-red-500 transition duration-150 text-white ease-in-out hover:border-gray-400 hover:bg-red-600 border rounded px-8 py-2 text-sm"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
              <button
                onClick={closeModal}
                className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                aria-label="cerrar modal"
                role="button"
              ></button>
            </div>
          </div>
        </div>
      )}
      <CardCandidatos></CardCandidatos>
    </div>
  );
};

export default AddCandidatos;

import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Modal from "react-modal";
import logo from "../assets/avatar.png";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css"; 

Modal.setAppElement("#root");

function Dashboard() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetch("api/obtener-usuario")
      .then((response) => response.json())
      .then((data) => setUsername(data.nombreUsuario))
      .catch((error) => console.error("Error fetching username:", error));
  
    const updateTimer = () => {
      if (timeRemaining > 0) {
        setTimeRemaining((prev) => prev - 1);
      }
    };
  
    const timerInterval = setInterval(updateTimer, 1000);
  
    return () => clearInterval(timerInterval);
  
  }, [timeRemaining]);
  

  const startVoting = () => {
    if (selectedTime) {
      const timeDifference = Math.floor(
        (selectedTime.toDate() - new Date()) / 1000
      );
      setTimeRemaining(timeDifference);
      setModalIsOpen(false);
    }
  };

  return (
    <div>
      <body class="flex bg-gray-100 min-h-screen">
        <aside class="hidden sm:flex sm:flex-col tab">
          <a
            href="/dashboard"
            class="inline-flex items-center justify-center h-20 w-20 bg-cyan-500 hover:bg-cyan-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              width="30"
              viewBox="0 0 448 512"
              style={{ color: "#f1c9a5" }}
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
          </a>
          <div class="flex-grow flex flex-col justify-between text-gray-100 bg-sky-800">
            <nav class="flex flex-col mx-4 my-6 space-y-4">
              <a
                href="/dashboard"
                class="inline-flex items-center justify-center py-3 text-purple-600 bg-white hover:bg-yellow-500 rounded-lg"
              >
                <span class="sr-only">Dashboard</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-fill-add"
                  viewBox="0 0 16 16"
                  style={{ color: "black" }}
                >
                  <title>Nuevo cliente</title>
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                </svg>
              </a>
              <a
                href="/dashboard/votacionesviews"
                class="inline-flex items-center justify-center py-3 text-purple-600 bg-white hover:bg-yellow-500 rounded-lg"
              >
                <span class="sr-only">Historial</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-clipboard2-data hover:bg-yellow-500"
                  viewBox="0 0 16 16"
                  style={{ color: "black" }}

                >
                  <title>Historial</title>
                  <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z" />
                  <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z" />
                  <path d="M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z" />
                </svg>
              </a>
              <a
                href="/dashboard/userpolcadot"
                class="inline-flex items-center justify-center py-3 text-purple-600 bg-white hover:bg-yellow-500 rounded-lg"
              >
                <span class="sr-only">Login Polkadot</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  style={{ color: "#fdc20e" }}
                >
                  <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                </svg>
              </a>
            </nav>
          </div>
        </aside>
        <div class="flex-grow text-gray-800">
          <header class="flex items-center h-20 px-6 sm:px-10 bg-white">
            <button class="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
              <span class="sr-only">Menu</span>
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>

            <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
              <button
                type="button"
                className="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                onClick={() => setModalIsOpen(true)}
              >
                Iniciar votación
              </button>
            </div>

            <div className="text-center flex flex-shrink-0 items-center ml-auto">
              <div id="countdown" className="text-md font-bold">
                <span id="days" className="mr-2">
                  {Math.floor(timeRemaining / (24 * 60 * 60))} días
                </span>
                <span id="hours" className="mx-2">
                  {Math.floor((timeRemaining % (24 * 60 * 60)) / 3600)} horas
                </span>
                <span id="minutes" className="mx-2">
                  {Math.floor((timeRemaining % 3600) / 60)} minutos
                </span>
                <span id="seconds" className="ml-2">
                  {timeRemaining % 60} segundos
                </span>
              </div>
            </div>

            {/* Modal */}
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              contentLabel="Iniciar votación"
              className="Modal"
              overlayClassName="Overlay"
            >
              <div className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0">
                <div
                  role="alert"
                  className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
                >
                  <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                    <div className="w-full flex justify-start text-gray-600 mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-wallet"
                        width="52"
                        height="52"
                        viewBox="0 0 24 24"
                        strokeWidth="1"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                        <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                      </svg>
                    </div>
                    <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
                      Iniciar votación
                    </h1>
                    <label
                      htmlFor="voting-time"
                      className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                    >
                      Tiempo de Votación
                    </label>
                    <Datetime
                      id="voting-time"
                      value={selectedTime}
                      onChange={(value) => setSelectedTime(value)}
                      inputProps={{ placeholder: "Seleccione fecha y hora" }}
                    />
                    <div className="flex items-center justify-start w-full mt-4">
                      <button
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-green-600 bg-green-500 rounded text-white px-8 py-2 text-sm"
                        onClick={startVoting}
                      >
                        Iniciar
                      </button>
                      <button
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-red-500 transition duration-150 text-white ease-in-out hover:border-gray-400 hover:bg-red-600 border rounded px-8 py-2 text-sm"
                        onClick={() => setModalIsOpen(false)}
                      >
                        Cancelar
                      </button>
                    </div>
                    <button
                      className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                      onClick={() => setModalIsOpen(false)}
                      aria-label="cerrar modal"
                      role="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-x"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </Modal>

            <div class="flex flex-shrink-0 items-center ml-auto">
              <button class="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
                <span class="sr-only">User Menu</span>
                {/* <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                  <span className="font-semibold">{username}</span>
                </div> */}
                <div class="hidden md:flex md:flex-col md:items-end md:leading-tight">
                  <span class="font-semibold">Admin</span>
                </div>
                <span class="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                  <img
                    src={logo}
                    alt="user profile photo"
                    class="h-full w-full object-cover"
                  />
                </span>
              </button>
              <div class="border-l pl-3 ml-3 space-x-1">
                <a
                  class="relative p-2 text-gray-400 hover:text-gray-600 rounded-full"
                  href="/"
                >
                  <span class="sr-only">Log out</span>
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <title>Cerrar sesión</title>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </header>
          <main class="p-6 sm:p-10 space-y-6">
            <section>
              <Outlet></Outlet>
            </section>
          </main>
        </div>
      </body>
    </div>
  );
}

export default Dashboard;

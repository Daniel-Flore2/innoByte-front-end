import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserVote() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    // Make API request to get candidates
    fetch("URL_API")
      .then((response) => response.json())
      .then((data) => setCandidates(data));
  }, []);

  const handleVote = async (candidateName, candidateToken) => {
    try {
      // Make API request to submit vote
      const response = await fetch("URL_API_VOTE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          candidateName,
          candidateToken,
        }),
      });

      if (response.ok) {
        // Show success toast if the vote was successfully submitted
        toast.success(
          `Has votado por ${candidateName}. ¡Gracias por participar!`
        );
      } else {
        // Show error toast if there was an issue with the vote submission
        toast.error(
          "Hubo un problema al enviar tu voto. Inténtalo de nuevo más tarde."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      // Show a generic error toast if there was an unexpected error
      toast.error("Hubo un error inesperado. Inténtalo de nuevo más tarde.");
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message = "¿Estás seguro de abandonar la página sin votar?";

      // Mostrar confirmación nativa del navegador
      const result = window.confirm(message);

      if (!result) {
        // Cancelar el evento de descarga si el usuario hace clic en "Cancelar"
        event.preventDefault();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="relative min-h-screen py-16 overflow-hidden bg-gray-900 isolate sm:py-24 lg:py-32">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">Candidatos</h1>
        <p className="text-xl text-gray-300">
          Los siguientes son los candidatos a elegir:
        </p>
      </div>

      <div className="flex-wrap items-center lg:flex md:flex sm:flex xl:justify-between md:justify-around sm:justify-around lg:justify-around">
        {candidates.map((candidate) => (
          <div
            key={candidate.token}
            className="relative mt-16 mb-32 xl:w-1/3 sm:w-3/4 md:w-2/5 sm:mb-24 xl:max-w-sm lg:w-2/5"
          >
            <div className="overflow-hidden bg-white rounded shadow-md">
              <div className="px-6 mt-16">
                <div className="pb-1 text-3xl font-bold text-center">
                  {candidate.nombre} {candidate.apellido}
                </div>
                <p className="text-sm text-center text-gray-800">
                  {candidate.organizacion}
                </p>
                <div className="flex justify-center w-full pt-5 pb-5">
                  <p className="text-base font-normal text-center text-gray-600">
                    Hash/Token: {candidate.token}
                  </p>
                </div>
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                  onClick={() =>
                    handleVote(
                      `${candidate.nombre} ${candidate.apellido}`,
                      candidate.token
                    )
                  }
                >
                  Votar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-gray-400">
        Selecciona el candidato de tu preferencia haciendo clic en su nombre.
      </p>

      {/* Agregamos el contenedor de toasts al final del componente */}
      <ToastContainer />
    </div>
  );
}

export default UserVote;

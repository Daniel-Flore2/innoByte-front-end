import React, { useState, useEffect } from "react";

function UserVote() {

  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    // Make API request
    fetch('URL_API')
      .then(response => response.json())
      .then(data => setCandidates(data))
  }, [])

  return (
    <div className="relative min-h-screen py-16 overflow-hidden bg-gray-900 isolate sm:py-24 lg:py-32">

      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">Candidatos</h1> 
        <p className="text-xl text-gray-300">Los siguientes son los candidatos a elegir:</p>
      </div>
      
      <div className="flex-wrap items-center lg:flex md:flex sm:flex xl:justify-between md:justify-around sm:justify-around lg:justify-around">

        {candidates.map(candidate => (
          <div key={candidate.token} className="relative mt-16 mb-32 xl:w-1/3 sm:w-3/4 md:w-2/5 sm:mb-24 xl:max-w-sm lg:w-2/5">
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

              </div>
            </div>
          </div>
        ))}
        
      </div>
      
      <p className="mt-8 text-center text-gray-400">
        Leyenda: Selecciona el candidato de tu preferencia haciendo click en su nombre.
      </p>

    </div>
  );

}

export default UserVote;
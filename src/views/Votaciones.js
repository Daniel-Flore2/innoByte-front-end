import React, { useEffect, useState } from "react";
import "../styles/title.css";

const Votaciones = () => {
  const [gett, setGett] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const url = "http://13.52.101.48/api/product/get";
  const del = "http://13.52.101.48/api/product/delete?id=";

  useEffect(() => {
    fetch("http://localhost:3000/api/product/get")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setGett(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  // const getRequest = {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     name: name,
  //     descripcion: descripcion,
  //     price: price,
  //     amount: amount,
  //   }),
  // };

  return (
    <div className="md:px-32 py-8 w-full">
        <div className="text-center space-y-8">
          <div className="text-center text-5xl font-bold">
            Lista de candidatos 
            <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
              <span className="animate-word col-span-full row-span-full">
                PRI
              </span>
              <span className="animate-word-delay-1 col-span-full row-span-full">
                PAN
              </span>
              <span className="animate-word-delay-2 col-span-full row-span-full">
                PRD
              </span>
              <span className="animate-word-delay-3 col-span-full row-span-full">
                MORENA
              </span>
              <span className="animate-word-delay-4 col-span-full row-span-full">
                PT
              </span>
              {/* <span className="animate-word-delay-5 col-span-full row-span-full">
                VERDE
              </span> */}
            </div>
          </div>
          <p className="text-gray-600">
            Lista de candidatos / Votaciones 
          </p>
        </div>
      <div className="py-10"></div>
      <div className="shadow overflow-hidden rounded border-b border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                Nombre del candidato
              </th>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                Partido
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                votos
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className="w-1/3 text-left py-3 px-4">Lian</td>
              <td className="w-1/3 text-left py-3 px-4">PRI</td>
              <td className="text-left py-3 px-4">
                <a className="hover:text-blue-500" href="tel:622322662">
                  622322662
                </a>
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="w-1/3 text-left py-3 px-4">Emma</td>
              <td className="w-1/3 text-left py-3 px-4">MORENA</td>
              <td className="text-left py-3 px-4">
                <a className="hover:text-blue-500" href="tel:622322662">
                  622322662
                </a>
              </td>
            </tr>
            <tr>
              <td className="w-1/3 text-left py-3 px-4">Oliver</td>
              <td className="w-1/3 text-left py-3 px-4">PAN</td>
              <td className="text-left py-3 px-4">
                <a className="hover:text-blue-500" href="tel:622322662">
                  622322662
                </a>
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="w-1/3 text-left py-3 px-4">Isabella</td>
              <td className="w-1/3 text-left py-3 px-4">PRD</td>
              <td className="text-left py-3 px-4">
                <a className="hover:text-blue-500" href="tel:622322662">
                  622322662
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Votaciones;

import React from "react";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom'; 
import UserVote from "./UserVote"; // Importa el componente UserVote

function UserPreview() {
  return (
    <section className="relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      <div className="max-w-2xl mx-auto lg:max-w-4xl">
        <div className="mb-4 text-center">
          <RiVerifiedBadgeLine className="w-10 h-10 mx-auto text-indigo-500" />
          <p className="font-semibold text-gray-900">Verificado</p>
        </div>
        <figure className="mt-6 text-center">
          <blockquote className="text-xl font-semibold leading-8 text-center text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              "La democracia es diálogo y debate; es contraste de ideas y
              proyectos. México es una democracia con una ciudadanía cada vez
              más activa y participativa"
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="w-10 h-10 mx-auto rounded-full"
              src="https://cdn.britannica.com/81/199881-050-5E069A9B/Andres-Manuel-Lopez-Obrador-2017.jpg?w=400&h=300&c=crop"
              alt=""
            />
            <div className="flex items-center justify-center mt-4 space-x-3 text-base">
              <div className="font-semibold text-gray-900">
                Andres Manuel Lopez Obrador
              </div>
              <svg
                viewBox="0 0 2 2"
                width="3"
                height="3"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div className="text-gray-600">Presidente de Mexico</div>
            </div>
          </figcaption>
        </figure>
        <div className="mt-6 text-center">
        <NavLink
          to="/uservote"
          className="inline-block px-8 py-3 mt-8 text-lg font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Continuar
        </NavLink>
      </div>
      </div>
    </section>
  );
}

export default UserPreview;

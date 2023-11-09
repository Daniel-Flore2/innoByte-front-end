import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../assets/avatar.png";

function Dashboard() {
  return (
    <div>
      <body class="flex bg-gray-100 min-h-screen">
        <aside class="hidden sm:flex sm:flex-col tab">
          <a
            href="/dashboard"
            class="inline-flex items-center justify-center h-20 w-20 bg-cyan-500 hover:bg-purple-300 focus:bg-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <title>Clientes</title>
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
          </a>
          <div class="flex-grow flex flex-col justify-between text-gray-100 bg-sky-800">
            <nav class="flex flex-col mx-4 my-6 space-y-4">
              <a
                href="/dashboard"
                class="inline-flex items-center justify-center py-3 text-purple-600 bg-white rounded-lg"
              >
                <span class="sr-only">Dashboard</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-fill-add"
                  viewBox="0 0 16 16"
                >
                  <title>Nuevo cliente</title>
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                </svg>
              </a>
              <a
                href="/dashboard/votacionesviews"
                class="inline-flex items-center justify-center py-3 text-purple-600 bg-white rounded-lg"
              >
                <span class="sr-only">Historial</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-clipboard2-data"
                  viewBox="0 0 16 16"
                >
                  <title>Historial</title>
                  <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z" />
                  <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z" />
                  <path d="M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z" />
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

            <div class="flex flex-shrink-0 items-center ml-auto">
              <button class="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
                <span class="sr-only">User Menu</span>
                {/* <div class="hidden md:flex md:flex-col md:items-end md:leading-tight">
                  <span class="font-semibold">Martin</span>
                </div> */}
                <span class="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                  <img
                    src={logo}
                    alt="user profile photo"
                    class="h-full w-full object-cover"
                  />
                </span>
              </button>
              <div class="border-l pl-3 ml-3 space-x-1">
                <a class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full" href="/">
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
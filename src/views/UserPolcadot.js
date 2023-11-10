import React from 'react';
// import { useAuth } from './AuthContext'; // Asegúrate de que la ruta sea correcta

const PolkadotLogin = () => {
//   const { isAuthenticated, connectToPolkadot } = useAuth();

  const handleConnectClick = async () => {
    // Llama a la función connectToPolkadot al hacer clic en el botón
    // await connectToPolkadot();
  };

  return (
    <main id="content" role="main" className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Iniciar sesión en Polkadot</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Conéctate a tu cuenta de Polkadot para generar un token.
            </p>
          </div>

          <div className="mt-5">
            <form>
              <div className="grid gap-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold ml-1 mb-2 dark:text-white">Conéctate a Polkadot</label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                      required
                      aria-describedby="email-error"
                    />
                  </div>
                  <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                    Please include a valid email address so we can get back to you
                  </p>
                </div>
                <button
                  type="button" // Cambiado de submit a button
                  onClick={handleConnectClick}
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Conectar a Polkadot
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PolkadotLogin;

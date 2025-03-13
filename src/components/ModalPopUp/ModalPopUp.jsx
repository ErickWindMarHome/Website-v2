import React from 'react'

class ModalPopUp extends React.Component {
  state = {
    abierto: false,
  }

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto })
  }

  render() {
    return (
      <>
        <div>
          <div className="w-[35%] rounded-lg bg-[#234992] text-center text-sm font-semibold text-white shadow-md">
            <button onClick={this.abrirModal} className="w-full rounded-lg bg-white py-2 text-[#234992] transition duration-200 hover:bg-slate-200">
              CLIC AQUÍ PARA MÁS INFORMACIÓN
            </button>
          </div>
        </div>

        {this.state.abierto && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-[90%] rounded-lg bg-white p-4 shadow-lg sm:w-[400px]">
              <h2 className="mb-3 text-center text-lg font-semibold">Iniciar Sesión</h2>
              <div className="mb-4">
                <label htmlFor="usuario" className="mb-1 block text-sm font-medium text-gray-700">
                  Usuario
                </label>
                <input type="text" id="usuario" className="w-full rounded-lg border border-gray-300 p-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <input type="text" id="password" className="w-full rounded-lg border border-gray-300 p-2" />
              </div>
              <div className="flex justify-between">
                <button onClick={this.abrirModal} className="rounded-lg bg-blue-500 px-4 py-2 text-white transition duration-200 hover:bg-blue-600">
                  Iniciar Sesión
                </button>
                <button onClick={this.abrirModal} className="rounded-lg bg-gray-300 px-4 py-2 text-black transition duration-200 hover:bg-gray-400">
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default ModalPopUp

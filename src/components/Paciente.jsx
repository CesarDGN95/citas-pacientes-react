
const Paciente = ({paciente, setPacient, eliminarPaciente}) => {
  // DESTRUCTURING PARA UTILIZAR LAS VARIABLES
  const {nombre, propietario, email, alta, sintomas, id} = paciente

  const handlerEliminar = () => {
    const respuesta = confirm("Desear eliminarlo?")

    if(respuesta) {
      eliminarPaciente(id)
    }
    
  }

  return (
    <div className="mx-5 mb-3 bg-white shadow-md px-5 py-10 rounded-xl">
          <p className="font-bold mb-3 text-gray-700">
            Nombre: {" "}
            <span className="font-normal normal-case">{nombre}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700">
            Propietario: {" "}
            <span className="font-normal normal-case">{propietario}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700">
            Email: {" "}
            <span className="font-normal normal-case">{email}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700">
            Fecha Alta: {" "}  
            <span className="font-normal normal-case">{alta}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700">
            Sintomas: {" "}
            <span className="font-normal normal-case">{sintomas}</span>
          </p>

          <div className="flex justify-between mt-10">
            <button
            type="button"
              className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
              onClick={() => setPacient(paciente)}
            >
              Editar
            </button>

            <button
              type="button"
              className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
              onClick={handlerEliminar}
            >
              Eliminar
            </button>
          </div>
        </div>
  )
}

export default Paciente
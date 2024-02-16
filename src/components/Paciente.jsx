
const Paciente = ({paciente}) => {
  // DESTRUCTURING PARA UTILIZAR LAS VARIABLES
  const {nombre, propietario, email, alta, sintomas} = paciente

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
        </div>
  )
}

export default Paciente
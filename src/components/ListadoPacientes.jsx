import Paciente from "./Paciente"


const ListadoPacientes = ({paciente}) => {
  
  return (
    
    <div className="md:w-1/2 lg:3/5 ">
      {paciente.length != 0 ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Administra tus {" "}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
              </p>
          <div className="md:h-screen md:overflow-y-scroll">
            {
              paciente.map((paciente) => <Paciente key={paciente.id} paciente={paciente}/> )
            }
          
          </div>
 
        </>
      ) : (
        <>
           <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Comienza agregando pacientes y {" "}
                <span className="text-indigo-600 font-bold">apareceran en este lugar</span>
              </p>
        </>

      )}
      
         
    </div>
        
    
  )
}

export default ListadoPacientes
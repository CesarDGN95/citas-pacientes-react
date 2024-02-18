import {useState, useEffect} from 'react'
import Error from './Error'

const Formulario = ({paciente, setPaciente, pacient, setPacient}) => {

  const [nombre, setNombre] = useState("")
  const [propietario, setpropietario] = useState("")
  const [email, setEmail] = useState("")
  const [alta, setAlta] = useState("")
  const [sintomas, setSintomas] = useState("")

  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  // VALIDACION DE LOS CAMPOS
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if([nombre, propietario, email, alta, sintomas].includes("")) {
      setError(true)
      return
    } 

    setError(false)

    // OBJETO DE PACIENTES - Como llave y valor son lo mismo se omite el valor.
    const objtetoPaciente = {
      nombre, 
      propietario, 
      email, 
      alta, 
      sintomas
    }
    
    //REINICAR EL FORMULARIO
    setNombre("")
    setpropietario("")
    setEmail("")
    setAlta("")
    setSintomas("")

    //EDITANDO UN REGISTRO
    if(pacient.id) {
      //EL ID QUE YA TENGO EN pacient se lo asigno al nuevo objeto que modificare
      objtetoPaciente.id = pacient.id
      //UN NUEVO ARREGLO QUE ITERARA PARA DAR 
      const pacientesActualizado = paciente.map(pacienteState => pacienteState.id === pacient.id ? objtetoPaciente : pacienteState)
      
      setPaciente(pacientesActualizado)
      setPacient({})

      
    }else {
      // COPIA EL ARREGLO Y LE AGREGA EL NUEVO OBJETO
      objtetoPaciente.id = generarId()
      setPaciente([...paciente, objtetoPaciente])
    }

    
  }
  
  //EDITAR 
  useEffect(() => {
    if(Object.keys(pacient).length > 0) {
      setNombre(pacient.nombre)
      setpropietario(pacient.propietario)
      setEmail(pacient.email)
      setAlta(pacient.alta)
      setSintomas(pacient.sintomas)
    }

  }, [pacient])

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y {" "}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form action="" className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
          {error && 
            <Error><p>Todos los campos son obligatorios</p></Error>
          }
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>

            <input type="text" 
                  id="mascota"
                  placeholder="Nombre de la mascota"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>

            <input type="text" 
                  id="propietario"
                  placeholder="Nombre del Propietario"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={propietario}
                  onChange={(e) => setpropietario(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>

            <input type="email" 
                  id="email"
                  placeholder="Email Contacto Propietario"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>

            <input type="date" 
                  id="alta"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={alta}
                  onChange={(e) => setAlta(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Sintomas</label>

            <textarea className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los sintomas"
                      value={sintomas}
                      onChange={(e) => setSintomas(e.target.value)}
            />
          </div>

          
          
          <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold  hover:bg-indigo-700 cursor-pointer transition-all" 
          value={pacient.id ? "Editar Paciente" : "Nuevo Paciente"}
          />

        </form>
    </div>
  )
}

export default Formulario
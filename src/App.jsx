import {useState} from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'

function App() {
  const [paciente, setPaciente] = useState([])
  // TRABAJEMOS CON LA EDICION
  const [pacient, setPacient] = useState({})
  
  //FUNCION ELIMINAR PACIENTE
  const eliminarPaciente = (id) => {
    console.log(id)
    // NO MUTAMOS LOS ARREGLOS, CREAMOS UNO NUEVO
    const pacientesActualizados = paciente.filter(pacienteId => pacienteId.id != id) //NOS TRAEMOS TODOS LOS ID DIFEFRENTES AL ID QUE LE ESTTOY PASANDO
    //AGREGAMOS LOS PACIENTES SIN EL ID QUE SELECCIONAMOS
    setPaciente(pacientesActualizados)
  }
   

  return (
    <div className='container mx-auto mt-20'>
      <Header /> 

     
      <div className='mt-10 md:flex'> 
        <Formulario
          paciente={paciente}
          setPaciente={setPaciente}
          pacient={pacient}
          setPacient={setPacient}
        />
        
        <ListadoPacientes paciente={paciente}  setPacient={setPacient} eliminarPaciente={eliminarPaciente}/>
      </div>
    </div>
  )
}

export default App

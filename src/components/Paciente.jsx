
const Paciente = () => {
  return (
    <div className="mx-3 mb-3 bg-white shadow-md px-5 py-10 rounded-xl">
          <p className="font-bold mb-3 text-gray-700">
            Nombre: {" "}
            <span className="font-normal normal-case">Hook</span>
          </p>

          <p className="font-bold mb-3 text-gray-700">
            Propietario: {" "}
            <span className="font-normal normal-case">David Narro</span>
          </p>

          <p className="font-bold mb-3 text-gray-700">
            Email: {" "}
            <span className="font-normal normal-case">dnarro@gmail.com</span>
          </p>

          <p className="font-bold mb-3 text-gray-700">
            Fecha Alta: {" "}
            <span className="font-normal normal-case">12 de Febrero del 2099</span>
          </p>

          <p className="font-bold mb-3 text-gray-700">
            Sintomas: {" "}
            <span className="font-normal normal-case">Ut maximus elit eget libero mattis, vel varius ligula scelerisque. Curabitur ac lorem quis elit scelerisque dignissim. 
            Nulla malesuada et eros euismod suscipit. Nulla facilisi. Integer venenatis nisi vitae augue pulvinar tempor. Donec id ornare nisi, 
            ut vulputate mi. Sed nisl quam, vulputate at urna nec, faucibus gravida massa. Nunc gravida sollicitudin metus, ac ullamcorper erat convallis eu.</span>
          </p>
        </div>
  )
}

export default Paciente
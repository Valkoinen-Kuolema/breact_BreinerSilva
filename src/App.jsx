import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function app(props) {
  
  const [nombre , SetNombre] = useState('');
  const [apellido , SetApellido] = useState('');
  const [estado , SetEstado] = useState([]);

  function adicionarUsuario(e){
    e.preventDefault();
    let usuario = {
      nombre: nombre,
      apellido: apellido
      
    }
    SetEstado([...estado, usuario])
  }
      // {
      //   estado.map(usuario =>(
      //     <p>
      //       if ({usuario.nombre && usuario.apellido == SetEstado}) {
      //     }else{

      //     }
      //     </p>
      //   ))
      // }
    // if(estado == 0){
      // }else{
        
        
        // }

  // function restringir(){

  // }
  

  return (
    <form action="" onSubmit={(e) => adicionarUsuario(e)}>
      Digite nombre:
      <br />
      <input onChange={(e) => SetNombre(e.target.value)} type="text" name="Nombre" id="nombre" /> <br /> <br />
      Digite apellido:
      <br />
      <input onChange={(e) => SetApellido(e.target.value)} type="text" name="Apellido" id="apellido" /> <br /> <br />

      <button>Aceptar</button> <br /> <br />

      <div>
        <p>
          {
            estado.map(item=>(
              // <li key={item.nombre}> {item.nombre}</li>,
              <p key={item.estado}> {item.nombre +" "+ item.apellido}</p>

            ))
          }
        </p>
      </div>
    </form>
  )

    
}
  

export default app;
  

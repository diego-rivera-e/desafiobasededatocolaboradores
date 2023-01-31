import './index.css';
import Container from 'react-bootstrap/Container';
import dataColaboradores from './data/dataColaboradores';
import { useState } from "react";
import { useRef } from "react";

function App() {

    //----variables----
    //arreglos
    const [lista, setLista] = useState(dataColaboradores);
    const [buscar, setBuscar]= useState("");

    //referencias a input nombre y correo
    const inputNombre = useRef(null);
    const inputCorreo = useRef(null);

    //----funciones----
    //agregar Colaborador
    const handleAddUser = () => {
        if(inputNombre.current.value === "" || inputCorreo.current.value === ""){
            alert("Debe ingresar los datos del colaborador");
            return false;
        }
        //creacion objeto usuario
        const newUser = {
        //obtencion de valores de los input
        nombre: inputNombre.current.value,
        correo: inputCorreo.current.value,
        }

        //limpieza de los input
        inputNombre.current.value = "";
        inputCorreo.current.value = "";

        //agregar usuario al arreglo
        setLista([...lista, newUser]);
    }

    //----render----
    return (
        
    <div className="App">
        <Container>
            <h1>Registro de Colaborador</h1>
            <form action="#">
                <div class="col-md-12 row">
                    <div class="col-md-6">
                        <label for="formGroupExampleInput" class="form-label">Nombre Colaborador</label>
                        <input type="text" class="form-control" id="nombre" ref={inputNombre} placeholder="Ingresar el nombre un colaborador"/>
                    </div>
                    <div class="col-md-6">
                        <label for="formGroupExampleInput2" class="form-label">Correo Colaborador</label>
                        <input type="text" class="form-control" id="correo" ref={inputCorreo} placeholder="Ingresar el correo de un colaborador"/>
                    </div>
                    <button onClick={handleAddUser} class="btn btn-primary mt-2">Agregar Colaborador</button>
                </div>
            </form>
            
        </Container>
        <hr/>
        <Container>
        <div>
            <h1>Listados de Colaboradores</h1>
            
            <div className='d-flex justify-content-end offset-6 mb-2'>
                <label>Buscador de Colaboradores</label>
                <input placeholder="Busca un colaborador" className='form-control' value={buscar} onChange ={ (event)=> setBuscar(event.target.value)}/>
            </div>

            <table className='table table-bordered'>
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    </tr>
                </thead>
                <tbody>

                {lista.filter(colaboradores => colaboradores.nombre.toLowerCase().includes(buscar.toLowerCase()) || colaboradores.correo.toLowerCase().includes(buscar.toLowerCase())).map((item, index) => (
                    <tr key={index}>
                        <td>{item.nombre}</td>
                        <td>{item.correo}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </Container>
    </div>
  );
}

export default App;
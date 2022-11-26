import "./App.css";

//----Importacion para React-Boostrap-----------------------

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//-------Importacion de componentes----------

import Encabezado from "./Component/Encabezado";
import Tarjetas from "./Component/Tarjetas";

//-------------imagenes----------------------------

import imagen1 from "./img/imagen1.jpg";
import imagen2 from "./img/imagen2.jpg";
import imagen3 from "./img/imagen3.jpg";
import imagen4 from "./img/imagen4.jpg";

//------------Array de objetos con las propiedades para cada una de las tarjetas-------

const miArrayObjeto = [
    {
        titulo: "Derechos y obligaciones de los actores del sistema...",
        imagenTarjeta: imagen1,
        parrafo:
            "La Superintendencia de riesgo del trabajo(SRT) es el organo rector de la salud..",
        id: 1,
    },
    {
        titulo: "El Estado después de la pandemia COVID-19 en nuestro País",
        imagenTarjeta: imagen2,
        parrafo:
            "El Estado como actor fundamental para enfrentar estos múltiples desafios.",
        id: 2,
    },
    {
        titulo: "Sensibilización en la temática de género y ..",
        imagenTarjeta: imagen3,

        parrafo:
            "Adquirir las herramientas necesarias para desnaturalizar la discriminación y las relaciones..",
        id: 3,
    },
    {
        titulo: "La importancia del control interno en la ...",
        imagenTarjeta: imagen4,
        parrafo:
            "La importancia de contar con un adecuado sistemade control interno para fortalecer el Esado..",
        id: 4,
    },
];

//-----------------------------------------------------------------------------------------

function App() {
    return (
    
        <div className="cuerpo"> 
            <Encabezado />

            <Container>
                <div className="cuerpo">
                    <Row>
                        <Col className="my-4">
                            <h1>Curso con Insccripción Abierta</h1>
                        </Col>
                    </Row>
                </div>

                <Row>
                    {miArrayObjeto.map((objeto) => (
                        <Col
                            className="d-flex justify-content-center my-3"
                            key={objeto.id}
                        >
                            <Tarjetas objeto={objeto} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default App;

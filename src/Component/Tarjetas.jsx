
import "../App.css";


//----Importacion para React-Boostrap-----------------------

import Card from "react-bootstrap/Card";

//-------Importacion de componentes----------
import Boton from "./Boton"

//-------------------------------------------------------

const Tarjetas = (props) => {
    return (
        <Card style={{ width: "16rem" }}>
            <Card.Img variant="top" fluid src={props.objeto.imagenTarjeta} />
            <Card.Body>
                <Card.Title className="tituloTarjeta">{props.objeto.titulo}</Card.Title>
                <Card.Text>{props.objeto.parrafo}</Card.Text>
                <Boton  nombre={"Inscribirse"}/>
            </Card.Body>
        </Card>
    );
};

export default Tarjetas;

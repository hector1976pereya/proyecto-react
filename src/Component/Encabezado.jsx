import "../App.css";

//----Importacion para React-Boostrap-----------------------

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//-----------importanado componente Boton---------------

import Boton from "./Boton";

//------------------------------------------------------------------------------

const Encabezado = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">INAP</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">CURSOS</Nav.Link>
                        <Nav.Link href="#pricing">FORMACION 2023</Nav.Link>
                        <Nav.Link href="#pricing">PROGRAMAS</Nav.Link>
                        <Nav.Link href="#pricing">BENEFICIOS Y BECAS</Nav.Link>
                        <Nav.Link href="#pricing">CTC</Nav.Link>
                        <Nav.Link href="#pricing">RUT</Nav.Link>
                        <Nav.Link href="#pricing">PLANIFICACIÓN</Nav.Link>
                        <Nav.Link href="#pricing"></Nav.Link>
                        <Boton nombre="Campus virtual" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Encabezado;

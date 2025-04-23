import {Instrumento} from "../../../types/instrumentos.types";
import {Button, Col, Image, Modal, Row} from "react-bootstrap";

interface props {
    instrumento: Instrumento;
    showModal: boolean;
    handleClose: () => void;
}

export const ModalInstrumentoDetalle = ({ instrumento , showModal , handleClose } : props)=> {
    const imagePath = `http://localhost:8080/imagenes/${instrumento.imagen}`;
    const isFree = instrumento.costoEnvio === "G";

    return (
        <Modal show={showModal} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>{instrumento.instrumento}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md={6} className="d-flex justify-content-center align-items-center p-2">
                        <img
                            src={imagePath}
                            alt={instrumento.instrumento}
                            className="w-75"
                        />
                    </Col>
                    <Col md={6}>
                        <p><strong>${instrumento.precio}</strong></p>
                        <p><strong>Marca:</strong> {instrumento.marca}</p>
                        <p><strong>Modelo:</strong> {instrumento.modelo}</p>
                        <p>
                            <strong>Costo Envío:</strong>{" "}
                            {isFree ? (
                                <span className="text-success mb-1">
                                    <Image src="http://localhost:8080/imagenes/camion.png"/>
                                    Envío gratis a todo el país
                                </span>
                            ) : (
                                <span className="text-danger">${instrumento.costoEnvio}</span>
                            )}
                        </p>
                        <p className="text-muted">{instrumento.cantidadVendida} vendidos</p>
                        <Button variant="outline-primary">Agregar al carrito</Button>
                    </Col>
                </Row>
                <hr />
                <p><strong>Descripción:</strong></p>
                <p>{instrumento.descripcion}</p>
            </Modal.Body>
        </Modal>
    )
}

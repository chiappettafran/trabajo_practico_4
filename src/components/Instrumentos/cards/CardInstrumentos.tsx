import {Button, Card, Col, Image, Row} from "react-bootstrap";
import { Instrumento } from "../../../types/instrumentos.types";

interface Props {
  instrumento: Instrumento;
  handleShow: () => void;
  setInstrumentoDetalle: (instrumento : Instrumento) => void;
}

export const CardInstrumentos = ({ instrumento, handleShow, setInstrumentoDetalle }: Props ) => {
  const isFree = instrumento.costoEnvio === "G";
  const imagePath = `http://localhost:8080/imagenes/${instrumento.imagen}`;

  return (
    <Card className="mb-3 shadow-sm">
      <Row className="g-0 align-items-center">
        <Col md={3}>
          <Card.Img
            src={imagePath}
            alt={instrumento.instrumento}
            className="img-fluid p-2"
          />
        </Col>
        <Col md={9}>
          <Card.Body>
            <Row className="align-items-center">
              <Col xs={9}>
                <Card.Title>{instrumento.instrumento}</Card.Title>
                <h4>${instrumento.precio}</h4>
                {isFree ? (
                    <p className="text-success mb-1">
                      <Image src="http://localhost:8080/imagenes/camion.png"/>
                      Envío gratis a todo el país
                    </p>
                ) : (
                    <p className="text-danger mb-1">
                      Costo de Envío Interior de Argentina: ${instrumento.costoEnvio}
                    </p>
                )}
                <small className="text-muted">
                  {instrumento.cantidadVendida} vendidos
                </small>
              </Col>

              <Col xs={0} className="d-flex justify-content-start">
                <Button
                    variant="primary"
                    size="lg"
                    onClick={() => {
                      setInstrumentoDetalle(instrumento);
                      handleShow()}}>
                  Ver Detalle
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

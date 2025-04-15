import { Card, Col, Image, Row } from "react-bootstrap";
import { Instrumento } from "../types/instrumentos.types";

interface Props {
  instrumento: Instrumento;
}

export const CardInstrumentos = ({ instrumento }: Props) => {
  const isFree = instrumento.costoEnvio === "G";
  const imagePath = `/public/images/${instrumento.imagen}`;

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
            <Card.Title>{instrumento.instrumento}</Card.Title>
            <h4>${instrumento.precio}</h4>
            {isFree ? (
              <p className="text-success mb-1">
                <Image src="/public/images/camion.png" />
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
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

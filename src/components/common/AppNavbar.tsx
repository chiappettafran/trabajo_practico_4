import { Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AppNavbar = () => {
    return (
        <Container fluid className="mb-4">
            <Nav variant="underline">
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/home" end>
                        Principal
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/ubicacion" end>
                        Donde Estamos
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/instrumentos" end>
                        Productos
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    );
};

export default AppNavbar;
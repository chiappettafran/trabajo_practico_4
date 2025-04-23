import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-light py-4 mt-5">
            <Container className="text-center">
                <p className="text-muted mb-0">
                    © {new Date().getFullYear()} Kiosquin Rock - Todos los derechos reservados
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
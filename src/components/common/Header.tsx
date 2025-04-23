import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand href="/">KIOSQUIN ROCK</Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Header;
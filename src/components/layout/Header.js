import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

function Header () {
    return (
        <header id="header">
            <Navbar expand="lg">
                <Container>
                    <Link to="/" className="navbar-brand fw-bolder">
                        <img alt="Logo" src={process.env.PUBLIC_URL + '/logo-white.svg'} />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/sobre" className="nav-link">Sobre o projeto</Link>
                            <NavDropdown title="Perfil" id="basic-nav-dropdown">
                                <Link to="/perfil" className="dropdown-item">Dados pessoais</Link>
                                <Link to="/perfil/mensagens" className="dropdown-item">Mensagens</Link>
                                <Link to="/perfil/favoritos" className="dropdown-item">Favoritos</Link>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action">Sair</NavDropdown.Item>
                            </NavDropdown>
                            <Link to="/anunciar" className="nav-link advertise-btn ms-5 px-4 rounded-pill">Anunciar</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header;
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
// import {ReactComponent as Logo} from "";

function Header () {
    return (
        <header id="header">
            <Navbar expand="lg">
                <Container>
                    <Link to="/trade-in/" className="navbar-brand fw-bolder">
                        <img src={process.env.PUBLIC_URL + '/logo-white.svg'} />
                        {/*<span className="text-uppercase fw-normal">Trade</span><span className="fw-bolder">IN</span>*/}
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/trade-in/" className="nav-link">Home</Link>
                            <Link to="/trade-in/sobre" className="nav-link">Sobre o projeto</Link>
                            <NavDropdown title="Perfil" id="basic-nav-dropdown">
                                <Link to="/trade-in/perfil" className="dropdown-item">Dados pessoais</Link>
                                <Link to="/trade-in/perfil/mensagens" className="dropdown-item">Mensagens</Link>
                                <Link to="/trade-in/perfil/favoritos" className="dropdown-item">Favoritos</Link>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action">Sair</NavDropdown.Item>
                            </NavDropdown>
                            <Link to="/trade-in/anunciar" className="nav-link advertise-btn ms-5 px-4 rounded-pill">Anunciar</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header;
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function Footer () {
    return (
        <footer id="footer">
            <Container className="py-5">
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/" className="navbar-brand fw-bolder">
                            <img alt="Logo" src={process.env.PUBLIC_URL + '/logo-white.svg'} />
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <p className="text-end m-0">
                            <Link to="/">Política de privacidade</Link>
                        </p>
                        <p className="text-end m-0">Copyright © 2021 - Integer+ - Todos os direitos reservados</p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
export default Footer;
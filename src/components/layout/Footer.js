import {Container} from "react-bootstrap";

function Footer () {
    return (
        <footer id="footer">
            <Container className="py-5">
                <div className="row">
                    <div className="col-6">
                        <h3 className="fw-bolder">TradeIN</h3>
                    </div>
                    <div className="col-6">
                        <p className="text-end"><a href="#">Política de privacidade</a></p>
                        <p className="text-end">Copyright © 2021 - Integer+ - Todos os direitos reservados</p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
export default Footer;
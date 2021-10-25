import {Button, Form} from "react-bootstrap";
import {useState} from "react";

function Advertise() {
    /*const [type, setType] = useState(false);

    function typeHandler(e) {
        e.preventDefault();
        setType(true);
    }*/

    /*if(!type) {
        return (
            <div className="container py-5">
                <div className="bg-white p-3">
                    <h1 className="display-5 fw-bold mb-3">Oque gostaria de fazer?</h1>
                    <div className="row">
                        <div className="col">
                            <div>
                                <a className="advertise-type" href="#" onClick={typeHandler}>Vender</a>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <a className="advertise-type" href="#" onClick={typeHandler}>Trocar</a>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <a className="advertise-type" href="#" onClick={typeHandler}>Alugar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }*/

    return (
        <div className="container py-5">
            <div className="bg-white p-3">
                <h1 className="display-5 fw-bold mb-3">Publicar anúncio</h1>

                <Form>
                    {/*<div className="mb-3">
                        <Form.Select aria-label="Default select example">
                            <option>Tipo</option>
                            <option value="1">Vender</option>
                            <option value="2">Trocar</option>
                            <option value="3">Alugar</option>
                        </Form.Select>
                        <Form.Text className="text-muted">
                            Este campo virá pré-cadastrado, no ecrã anterior e ficará escondido (?), sendo utilizável apenas para o envio do formulário ao backend.
                        </Form.Text>
                    </div>*/}

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Título</Form.Label>
                        <Form.Control type="text" placeholder="Título do teu anúncio"/>
                        <Form.Text className="text-muted">
                            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Região</Form.Label>
                        <Form.Control type="text" placeholder="Informe a zona do teu anúncio"/>
                        <Form.Text className="text-muted">
                            Nulla porttitor accumsan tincidunt.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="123">
                        <Form.Label>Região</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem."
                            style={{height: '100px'}}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="valor">
                        <Form.Label>Valor</Form.Label>
                        <Form.Control type="text" placeholder="Valor"/>
                        <Form.Text className="text-muted">
                            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Permitir contato direto"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Contato">
                        <Form.Label>Forma de contato</Form.Label>
                        <Form.Control type="text" placeholder="Contato"/>
                        <Form.Text className="text-muted">
                            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Publicar anúncio
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Advertise;
import {Button, Form} from "react-bootstrap";

function Profile() {
    return (
        <div className="container py-5">
            <div className="bg-white p-3">
                <h1 className="display-5 fw-bold">Dados pessoais</h1>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Permitir o contato direto por defeito"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Contato">
                        <Form.Label>Forma de contato</Form.Label>
                        <Form.Control type="text" placeholder="Contato"/>
                        <Form.Text className="text-muted">
                            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Salvar dados
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Profile;
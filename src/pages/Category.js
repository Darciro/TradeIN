import MainSearch from "../components/MainSearch";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

function Category() {
    return (
        <div className="container py-5">
            <h1 className="display-5 fw-bold">Página de uma categoria</h1>

            <MainSearch/>

            <div className="row row-cols-4 mb-5">
                <div className="col mb-5">
                    <Card>
                        <Link to="/anuncio/some-cool-slug-for-this-ad">
                            <Card.Img variant="top" src="https://picsum.photos/id/111/150"/>
                            <Card.Body>
                                <Card.Title>Título de Anuncio</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Detalhes</Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </div>
                <div className="col mb-5">
                    <Card>
                        <Link to="/anuncio/some-cool-slug-for-this-ad">
                            <Card.Img variant="top" src="https://picsum.photos/id/122/150"/>
                            <Card.Body>
                                <Card.Title>Título de Anuncio</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Detalhes</Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </div>
                <div className="col mb-5">
                    <Card>
                        <Link to="/anuncio/some-cool-slug-for-this-ad">
                            <Card.Img variant="top" src="https://picsum.photos/id/133/150"/>
                            <Card.Body>
                                <Card.Title>Título de Anuncio</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Detalhes</Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </div>
                <div className="col mb-5">
                    <Card>
                        <Link to="/anuncio/some-cool-slug-for-this-ad">
                            <Card.Img variant="top" src="https://picsum.photos/id/144/150"/>
                            <Card.Body>
                                <Card.Title>Título de Anuncio</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Detalhes</Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </div>
                <div className="col mb-5">
                    <Card>
                        <Link to="/anuncio/some-cool-slug-for-this-ad">
                            <Card.Img variant="top" src="https://picsum.photos/id/155/150"/>
                            <Card.Body>
                                <Card.Title>Título de Anuncio</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Detalhes</Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </div>
                <div className="col mb-5">
                    <Card>
                        <Link to="/anuncio/some-cool-slug-for-this-ad">
                            <Card.Img variant="top" src="https://picsum.photos/id/166/150"/>
                            <Card.Body>
                                <Card.Title>Título de Anuncio</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Detalhes</Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </div>
                <div className="col mb-5">
                    <Card>
                        <Link to="/anuncio/some-cool-slug-for-this-ad">
                            <Card.Img variant="top" src="https://picsum.photos/id/177/150"/>
                            <Card.Body>
                                <Card.Title>Título de Anuncio</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Detalhes</Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </div>
                <div className="col mb-5">
                    <Card>
                        <Link to="/anuncio/some-cool-slug-for-this-ad">
                            <Card.Img variant="top" src="https://picsum.photos/id/188/150"/>
                            <Card.Body>
                                <Card.Title>Título de Anuncio</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Detalhes</Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Category;
import {Image} from "react-bootstrap";
import {useParams} from "react-router-dom";

function Ad() {
    const {slug} = useParams();

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-8">
                    <div className="bg-white p-3">
                        <Image src="https://picsum.photos/id/450/800/600" fluid className="mb-5"/>
                        <h1 className="display-5 fw-bold">Página de um anúncio</h1>
                        <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="bg-white p-3 mb-3">
                        <h2>Utilizador</h2>
                        Aqui vem os dados do vendedor (com suas opções de contato - caso ele tenha optado por partilhar).
                    </div>
                    <div className="bg-white p-3 mb-3">
                        <h2>Localização</h2>
                        Aqui vem o dados de localização do anuncio
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ad;
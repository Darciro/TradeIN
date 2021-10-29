import {Image} from "react-bootstrap";
import {useParams} from "react-router-dom";
import ads from "../data/ads.json"

function Ad() {
    const {slug} = useParams();
    let ad = [];
    ad = ads.filter(ad => ad.name.toLowerCase() === slug);

    if( !ad.length ) {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-8">
                        <div className="bg-white p-3 min-vh-100">
                            <h1 className="display-5 fw-bold">Carregando</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    ad = ad[0];
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-8">
                    <div className="bg-white p-3">
                        <Image src={ad.image} fluid className="mb-5"/>
                        <h1 className="display-5 fw-bold">{ad.name}</h1>
                        <p>{ad.desc}</p>
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
                    <div className="bg-white p-3 mb-3">
                        <h2>Valor</h2>
                        {ad.value}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ad;
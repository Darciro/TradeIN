import MainSearch from "../components/MainSearch";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import ads from "../data/ads.json";

function Category() {
    const adsShufled = ads.sort(() => Math.random() - 0.5);

    return (
        <div className="container py-5">
            <h1 className="display-5 fw-bold">Página de uma categoria</h1>

            <MainSearch/>

            <div className="row row-cols-4 mb-5">
                {adsShufled.map((ad, index) => (
                    <div key={index} className="col-3 mb-4">
                        <div className="card">
                            <Link to={ '/anuncio/' + ad.name.toLowerCase() }>
                                <img src={ad.image} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{ad.name}</h5>
                                    <div className="d-flex flex-row justify-content-between">
                                        <span className="card-link">{ad.value}</span>
                                        <span className="card-link">
                                            <small className="text-muted">{ad.locale}</small>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category;
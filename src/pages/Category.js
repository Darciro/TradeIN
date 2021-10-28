import MainSearch from "../components/MainSearch";
import {Button, Card} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {categories} from "../data/categories.json"
import ads from "../data/ads.json";
import {Fragment} from "react";

function Category() {
    const {categorySlug} = useParams();
    let category = categories.filter(category => category.slug === categorySlug);
    category = category[0];
    const categoryAds = ads.filter(ad => ad.category === category.title);

    if( !categoryAds.length ) {
        return (
            <Fragment>
                <div className="container py-5">
                    <h1 className="display-5 fw-bold">{category.title}</h1>
                </div>

                <div className="bg-white">
                    <div className="container py-5">
                        <MainSearch/>
                    </div>
                </div>

                <div className="container py-5">
                    <p>Sem anúncios nesta categoria</p>
                </div>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <div className="container py-5">
                <h1 className="display-5 fw-bold">{category.title}</h1>
            </div>

            <div className="bg-white">
                <div className="container py-5">
                    <MainSearch/>
                </div>
            </div>

            <div className="container py-5">
                <div className="row row-cols-4 mb-5">
                    {categoryAds.map((ad, index) => (
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
        </Fragment>
    )
}

export default Category;
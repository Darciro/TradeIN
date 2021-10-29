import {Link} from "react-router-dom";
import MainSearch from "../components/MainSearch";
import {Fragment} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import useSWR from "swr";
import AdsCategoriesCarousel from "../components/ads/AdsCategoriesCarousel";
import AdCard from "../components/ads/AdCard";

function Home() {

    // https://trade-in.rickmanu.me/fake-api/ads.json || https://rickmanu.me/projects/trade-in/fake-api/ads.json
    // https://trade-in.rickmanu.me/fake-api/categories.json || https://rickmanu.me/projects/trade-in/fake-api/categories.json

    const {data: ads, error} = useSWR('https://rickmanu.me/projects/trade-in/fake-api/ads.json');

    if (error) {
        return <div>Error...</div>
    }

    if (!ads) {
        return <div>Loading...</div>
    }

    //
    let featureAds = ads.slice(0, 12);

    // const categories = [...new Set( data.map( category => category.category ) )];
    // <pre>{JSON.stringify(categories, null, 2)}</pre>

    return (
        <Fragment>
            <div className="container py-5">
                <div className="row my-5">
                    <div className="intro-text col-md-8 pe-5">
                        <h1 className="display-5 fw-bold">Bem vindos!<br/> O que desejas?</h1>
                        <p className="fs-4">Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
                    </div>
                    <div className="col-md-4 d-flex flex-column justify-content-around">
                        <Link className="shadow-sm btn btn-outline-warning btn-sell btn-lg w-100" to="/anunciar">
                            <span>Vender</span>
                        </Link>
                        <Link className="shadow-sm btn btn-outline-success btn-trade btn-lg w-100" to="/anunciar">
                            <span>Trocar</span>
                        </Link>
                        <Link className="shadow-sm btn btn-outline-info btn-rental btn-lg w-100" to="/anunciar">
                            <span>Alugar</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="container py-5">
                    <MainSearch/>
                </div>
            </div>

            <div className="container">
                <div className="d-flex justify-content-between align-items-center pt-5">
                    <h2 className="fw-bold d-inline-block m-0">Categorias</h2>
                    <Link to="/anuncios" className="d-inline-block all-link">Todos os anúncios <FontAwesomeIcon icon={faArrowRight}/></Link>
                </div>
            </div>

            <AdsCategoriesCarousel/>


            <div className="container pb-5 mb-5">
                <div className="row">
                    <div className="col-md-12 pt-5">
                        <h2 className="fw-bold mb-3">Destaques</h2>
                    </div>
                    {
                        // @TODO: Get the actual featured ads when complete
                        featureAds.map((ad, index) => (
                            <AdCard key={index}
                                    slug={ad.slug}
                                    name={ad.name}
                                    thumb={ad.image_thumb}
                                    value={ad.value}
                                    locale={ad.locale}
                                    className="col-md-3 mb-5"/>
                        ))
                    }
                </div>
            </div>

        </Fragment>
    )
}

export default Home;
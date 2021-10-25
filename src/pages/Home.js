import {Button, Card, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import MainSearch from "../components/MainSearch";
import {Fragment} from "react";
import TinySlider from "tiny-slider-react";
import useSWR from "swr";
import {categories} from "../data/categories.json"
import ads from "../data/ads.json"

function Home() {
    // const {data: categories} = useSWR('../data/ca.json');
    console.log(ads)

    const settings = {
        lazyload: true,
        slideBy: true,
        nav: false,
        mouseDrag: true,
        items: 1,
        responsive: {
            768: {
                items: 2
            },
            992: {
                items: 4
            },
            1400: {
                items: 6
            }
        }
    };

    return (
        <Fragment>
            <div className="container py-5">
                <div className="row my-5">
                    <div className="intro-text col-8">
                        <h1 className="display-5 fw-bold">Bem vindos! O que desejas?</h1>
                        <p className="col-md-8 fs-4">Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
                    </div>
                    <div className="col-4 d-flex flex-column justify-content-around">
                        <Link className="btn btn-outline-warning btn-sell btn-lg w-100" to="/trade-in/anunciar">Vender</Link>
                        <Link className="btn btn-outline-success btn-trade btn-lg w-100" to="/trade-in/anunciar">Trocar</Link>
                        <Link className="btn btn-outline-info btn-rental btn-lg w-100" to="/trade-in/anunciar">Alugar</Link>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="container py-5">
                    <MainSearch/>
                </div>
            </div>

            <div className="container">
                <div className="categories d-flex justify-content-between align-content-center pt-5">
                    <h2 className="fw-bold d-inline-block">Categorias</h2>
                    <a href="#" className="d-inline-block">Todos os anúncios</a>
                </div>
            </div>

            <div id="categories-carousel" className="mt-3 mb-5">
                <TinySlider settings={settings}>
                    {categories.map((el, index) => (
                        <div key={index} style={{position: "relative"}}>
                            <a href="#">
                                <img
                                    className={`tns-lazy-img`}
                                    data-src={el.image}
                                    alt={el.title}
                                />
                                <h3>{el.title}</h3>
                            </a>
                        </div>
                    ))}
                </TinySlider>
            </div>

            <div className="container pb-5 mb-5">
                <div className="row">
                    <div className="col-12 pt-5">
                        <h2 className="fw-bold mb-3">Destaques</h2>
                    </div>
                    {ads.map((ad, index) => (
                        <div key={index} className="col-3 mb-4">
                            <div className="card">
                                <img src={ad.image} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{ad.name}</h5>
                                    {/*<p className="card-text">{ad.desc}</p>*/}
                                    <div className="d-flex flex-row justify-content-between">
                                        <span className="card-link">{ad.value}</span>
                                        <span className="card-link">
                                            <small className="text-muted">{ad.locale}</small>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default Home;
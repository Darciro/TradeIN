import MainSearch from "../components/MainSearch";
import {useParams} from "react-router-dom";
import {Fragment} from "react";
import useSWR from "swr";
import AdCard from "../components/ads/AdCard";

function Category() {
    const {categorySlug} = useParams();
    const {data: categories} = useSWR('https://rickmanu.me/projects/trade-in/fake-api/categories.json');
    const {data: ads} = useSWR('https://rickmanu.me/projects/trade-in/fake-api/ads.json');

    let category = {};
    let categoryAds = [];

    if (categories && ads) {
        category = categories.filter(category => category.slug === categorySlug);
        category = category[0];
        categoryAds = ads.filter(ad => ad.category === category.title);
    }

    /*let category = categories.filter(category => category.slug === categorySlug);
    category = category[0];
    const categoryAds = ads.filter(ad => ad.category === category.title);*/

    if (!categoryAds.length) {
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
                        <AdCard key={index}
                                slug={ad.slug}
                                name={ad.name}
                                thumb={ad.image_thumb}
                                value={ad.value}
                                locale={ad.locale}
                                className="col-md-3 mb-5"/>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default Category;
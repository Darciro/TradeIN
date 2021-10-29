import {Switch, Route} from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Advertise from "./pages/Advertise";
import About from "./pages/About";
import Profile from "./pages/profile/Profile";
import Messages from "./pages/profile/Messages";
import Favorites from "./pages/profile/Favorites";
import Category from "./pages/Category";
import Ad from "./pages/Ad";
import Ads from "./pages/Ads";

import './styles/main.scss'

const routes = [
    {
        path: "/anunciar",
        component: Advertise
    },
    {
        path: "/sobre",
        component: About
    },
    {
        path: "/perfil/mensagens",
        component: Messages
    },
    {
        path: "/perfil/favoritos",
        component: Favorites
    },
    {
        path: "/perfil",
        component: Profile,
    },
    {
        path: "/anuncio/:slug",
        component: Ad
    },
    {
        path: "/anuncios",
        component: Ads
    },
    {
        path: "/busca/:q",
        component: Ads
    },
    {
        path: "/:categorySlug",
        component: Category
    },
    {
        path: "/",
        component: Home
    },
];

function RouteWithSubRoutes(route) {
    return (
        <Route
            exact
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

function Main() {
    return (
        <div className="App">
            <Header/>

            <main>
                <Switch>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>
            </main>

            <Footer/>
        </div>
    );
}

export default Main;

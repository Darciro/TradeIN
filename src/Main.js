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

import './styles/main.scss'

const routes = [
    {
        path: "/trade-in/anunciar",
        component: Advertise
    },
    {
        path: "/trade-in/sobre",
        component: About
    },
    {
        path: "/trade-in/categoria",
        component: Category
    },
    {
        path: "/trade-in/perfil/mensagens",
        component: Messages
    },
    {
        path: "/trade-in/perfil/favoritos",
        component: Favorites
    },
    {
        path: "/trade-in/perfil",
        component: Profile,
    },
    {
        path: "/trade-in/anuncio/:slug",
        component: Ad
    },
    {
        path: "/trade-in/",
        component: Home
    },
];

function RouteWithSubRoutes(route) {
    return (
        <Route
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

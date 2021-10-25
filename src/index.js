import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import {BrowserRouter as Router} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
    <Router>
        <ScrollToTop />
        <Main/>
    </Router>,
    document.getElementById('root')
);
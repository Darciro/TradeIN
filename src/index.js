import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import {BrowserRouter as Router} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import {SWRConfig} from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())

ReactDOM.render(
    <Router>
        <ScrollToTop />
        <SWRConfig value={{ revalidateOnFocus: false, fetcher }}>
            <Main/>
        </SWRConfig>
    </Router>,
    document.getElementById('root')
);
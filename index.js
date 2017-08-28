import React from "react";
import {Router, Route, hashHistory, Link} from "react-router";
import ReactDOM from "react-dom";
import Calculator from "./components/calculator/calculate";
import Widgets from "./components/widgetsPage";
import contactNea from "./components/contact/contactnea";
import Outage from "./components/Outage/Outage";
import service from "./components/NewService/NewService";
import Overview from "./components/Overview/Overview";
import injectTapEventPlugin from 'react-tap-event-plugin';

import "./resources/style1.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./resources/style2.css";
import "../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import "../node_modules/react-select/dist/react-select.css";
import '../node_modules/react-datepicker/dist/react-datepicker.css';
import "./resources/custom.css";

import ExportData from "./components/Utility/ExportData";

injectTapEventPlugin();
ReactDOM.render(
    <Router history={hashHistory}>
        <Route component={Widgets}>
            <Route path="/" component={Overview}/>
            <Route path="/Outage" component={Overview}/>

            <Route path="/service" component={service}/>

            <Route path="/calculator" component={Calculator}/>
            <Route path="/contact" component={contactNea}/>
            <Route path="/overview" component={Outage}/>
            <Route path="/export" component={ExportData}/>
        </Route>

    </Router>,document.getElementById('root'));



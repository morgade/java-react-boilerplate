import Index from 'file?name=[name].[ext]!../index.html';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import FontAwesome from 'font-awesome/css/font-awesome.css';

import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router'

import App from './components/App.jsx';
import Home from './components/Home.jsx';


ReactDom.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
             <IndexRoute component={Home} />
             <Route path="home" component={Home} />
             <Redirect from="*" to="home" />
        </Route>
    </Router>
, document.getElementById('app'));
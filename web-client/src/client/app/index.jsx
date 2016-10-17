import Index from 'file?name=[name].[ext]!../index.html';
import OurCSS from '../less/mth.less';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import FontAwesome from 'font-awesome/css/font-awesome.css';

import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRedirect, Redirect, hashHistory} from 'react-router'

import App from './components/App.jsx';
import Home from './components/Home.jsx';
import CommentCrud from './components/comment-crud/CommentCrud.jsx';


ReactDom.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to="home" />
            <Route path="home" component={Home} />
            <Route path="comment-crud" component={CommentCrud}>
                <Route path=":id" component={CommentCrud} />
            </Route>
            <Redirect from="*" to="home" />
        </Route>
    </Router>
, document.getElementById('app'));
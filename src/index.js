import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom"
import './index.css';
import "typeface-raleway"
import Home from "./pages/home"
import about from "./pages/about"
import Post from "./pages/post"
import Page from "./pages/carrer"
import NotFound from "./pages/notfound"
import Services from './pages/services';
import Carrer from './pages/carrer';
import Contact from './pages/contact';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={about} />
            <Route exact path="/404" component={NotFound} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/carrer" component={Carrer} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/post/:id" render={props => <Post {...props} />} />
        </div>
    </Router>, 
    document.getElementById('root')
);


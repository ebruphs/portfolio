import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Header from './components/HeaderComponent/Header';
import App from './components/App';
import About from './components/AboutComponent/About';
import Projects from './components/ProjectsComponent/Projects';
import Contacts from './components/ContactComponent/Contacts';

//import { HashRouter as Router } from 'react-router-dom';

import './index.css';



ReactDom.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path ='/' render= {() =><Header><App /></Header> } />
            <Route path='/AboutComponent/About' render ={() => <Header><About /></Header>} />
            <Route path='/ProjectsComponent/Projects' render ={() => <Header><Projects /></Header>} />
            <Route path='/ContactComponent/Contacts' render ={() => <Header><Contacts /></Header>} />
        </Switch>
    </Router>,
    document.getElementById('root')
);
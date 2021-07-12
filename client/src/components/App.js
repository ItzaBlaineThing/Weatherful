import React from 'react';

// React Router Imports
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

// Import Custom Components
import Home from '../pages/Home';
import Weather from '../pages/Weather';

export default function App() {

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/weather" component={Weather} />
            </Switch>
        </Router>
    )
}
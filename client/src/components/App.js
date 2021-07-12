import React from 'react';

// React Router Imports
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

// Import Custom Components
import Home from '../pages/Home';

export default function App() {

    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    )
}
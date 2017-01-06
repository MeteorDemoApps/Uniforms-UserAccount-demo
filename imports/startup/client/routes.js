import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import LayoutPrivate from '../../ui/layout/private.jsx';
import HomeIndex from '../../ui/home/index.jsx';
import DashboardIndex from '../../ui/dashboard/index.jsx';
import logoutIndex from '../../ui/logout/index.jsx';

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/">
            <IndexRoute component={HomeIndex} />
            <Route path="/dashboard" component={LayoutPrivate}>
                <IndexRoute component={DashboardIndex} />
            </Route>
            <Route path="/logout" component={logoutIndex}/>
        </Route>
    </Router>
);



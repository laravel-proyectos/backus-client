import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from 'react-router-dom';
import { config } from '../config';
import { AdminRouter } from './AdminRouter';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router basename={config.basename}>
            <Switch>
                <Route
                    path="/auth"
                    component={AuthRouter}
                />
                <Route
                    path="/admin"
                    component={AdminRouter}
                />
                <Redirect
                    to="/auth/login"
                />
            </Switch>
        </Router>
    )
}

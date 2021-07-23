import React from 'react';
import {
    Switch,
    Redirect,
    Route
} from 'react-router-dom';
import { PublicLayout } from '../layout/PublicLayout';
import { LoginPage } from '../pages/public/Login/LoginPage'

export const AuthRouter = () => {
    return (
        <PublicLayout>
            <Switch>
                <Route
                    exact
                    path="/auth/login"
                    component={LoginPage}
                />
                <Redirect
                    to="/auth/login"
                />
            </Switch>
        </PublicLayout>
    )
}

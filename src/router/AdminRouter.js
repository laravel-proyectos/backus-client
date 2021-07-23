import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { Loader } from '../components/Loader';
import { NavMotion } from '../layout/NavMotion';
import { MainLayout } from '../layout/MainLayout/MainLayout';
import { MinimalLayout } from '../layout/MinimalLayout';
import { AdminLayout } from '../layout/AdminLayout';


const DashboardPage = lazy(() => import('../pages/secure/dashboard/DashboardPage'));
const UsersPage = lazy(() => import('../pages/secure/users/UsersPage'));
const RolesPage = lazy(() => import('../pages/secure/roles/RolesPage'));



export const AdminRouter = () => {
    const location = useLocation();

    return (
        <AdminLayout>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Redirect exact from="/" to="/admin/dashboard" />
                    <Route path={[]}>
                        <MinimalLayout>
                            <Switch location={location} key={location.pathname}>
                                <NavMotion></NavMotion>
                            </Switch>
                        </MinimalLayout>
                    </Route>
                    <Route
                        path={[
                            '/admin/dashboard',
                            '/admin/users',
                            '/admin/roles',
                        ]}
                    >
                        <MainLayout>
                            <Switch location={location} >
                                <NavMotion>
                                    <Route exact path="/admin/dashboard" component={DashboardPage} />
                                    <Route exact path="/admin/users" component={UsersPage} />
                                    <Route exact path="/admin/roles" component={RolesPage} />
                                </NavMotion>
                            </Switch>
                        </MainLayout>
                    </Route>
                </Switch>
            </Suspense>
        </AdminLayout>
    )
}

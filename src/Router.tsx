import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { user_routes } from './constants/path';
import { MainLayout } from './layout/indext';
import { MainHome } from './pages';

const Router = () => {
    return (
        <Routes>
            <Route path={user_routes.home} element={<MainLayout />}>
                <Route path={user_routes.home} element={<MainHome />} />
                
            </Route>
        </Routes>
    );
};

export default Router;
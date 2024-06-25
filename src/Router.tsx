import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { user_routes } from './constants/path';
import { MainLayout } from './layout/indext';
import { MainHome, MainMovieShow, MainSearch, MainWatchlist } from './pages';

const Router = () => {
    return (
        <Routes>
            <Route path={user_routes.home} element={<MainLayout />}>
                <Route path={user_routes.home} element={<MainHome />} />
                <Route path={user_routes.watchlist} element={<MainWatchlist/>}/>
                <Route path={user_routes.search} element={<MainSearch />} />
                <Route path={user_routes.movieShow} element={<MainMovieShow />} />
                
            </Route>
        </Routes>
    );
};

export default Router;
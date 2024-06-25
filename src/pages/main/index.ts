import { lazy } from "react";

export const MainHome = lazy(() => import('./home/Home'));
export const MainSearch = lazy(() => import('./search/Search'));
export const MainWatchlist = lazy(() => import('./watchlist/Watchlist'));
export const MainMovieShow = lazy(() => import('./movieShow/MovieShow'));
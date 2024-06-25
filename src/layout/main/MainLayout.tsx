import { Home, Search, Tv } from '@mui/icons-material';
import React, { Suspense, useMemo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, useLocation } from 'react-router-dom';
import BottomBar from '../../components/common/BottomBar';
import { user_routes } from '../../constants/path';
import styles from "./mainLayout.module.css";
import Loading from '../../Loading/Loading';
interface MainLayoutProps {

}

const menuList = [
    {
        label: "home",
        path: user_routes.home,
        icon: <Home />
    },
    {
        label: "search",
        path: user_routes.search,
        icon: <Search />
    },
    {
        label: "watchlist   ",
        path: user_routes.watchlist,
        icon: <Tv />
    },
]

const MainLayout: React.FC<MainLayoutProps> = () => {

    const {pathname} = useLocation()
    console.log(pathname);
    
    const isShowBar = useMemo(() => {
        if(pathname.endsWith("/show")) {
            return false
        }
        return true
    }, [pathname])

    return (
        <div className={styles.mainLayout}>
            <ErrorBoundary fallback={<>Error</>}>
                <Suspense fallback={<Loading/>}>
                    <Outlet />
                    {
                        isShowBar ? (
                            <BottomBar menuList={menuList} />
                        ) : (
                            null
                        )
                    }
                </Suspense>
            </ErrorBoundary>
        </div >
    );
};

export default MainLayout;
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

interface MainLayoutProps {

}

const MainLayout: React.FC<MainLayoutProps> = () => {
    return (
        <div>
            <ErrorBoundary fallback={<>Error</>}>
                <Suspense fallback={<>Loading.....</>}>
                    <Outlet />
                </Suspense>
            </ErrorBoundary>
        </div >
    );
};

export default MainLayout;
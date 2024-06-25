import React, { lazy, Suspense } from 'react';

const Search = lazy(() => import('../../../components/Search'));

interface HomeProps {
    
}

const Home: React.FC<HomeProps> = () => {
    return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Search/>
          </Suspense>
        </div>
    );
};

export default Home;
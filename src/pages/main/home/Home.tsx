import React, { useCallback } from 'react';
import Slider from '../../../components/common/Slider';
import { useNavigate } from 'react-router-dom';
import { user_routes } from '../../../constants/path';
import Search from '../../../components/Search';

const data = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
      title: 'Night view',
      description: '4.21M views',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
      title: 'Lake view',
      description: '4.74M views',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
      title: 'Mountain view',
      description: '3.98M views',
    },
  ];

const Home: React.FC = () => {
  // navigate 
  const navigate = useNavigate();

  const handleToNavigate = useCallback((id: number) => {
    navigate(user_routes.movieShow.replace(":id", id.toString()));
  }, [])

  return (
        <div>
          <header><Search/></header>
           <Slider data={data} onPress={handleToNavigate}/>
        </div>
    );
};

export default Home;
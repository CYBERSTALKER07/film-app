import React from 'react';
import image from '../../src/assests/image.jpg';
import './Loading.css'

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
    return (
       
  <div className="loader">
  <span className="loader-text">loading</span>
    <span className="load"></span>
</div>

    );
};

export default Loading;
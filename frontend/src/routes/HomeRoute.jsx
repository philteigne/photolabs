import {React, useState} from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const { photos, topics, modalControls, favControls } = props

  const favPhoto = favControls.favPhoto;

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favPhoto={favPhoto}/>
      <PhotoList photos={photos} favControls={favControls} modalControls={modalControls}/>
    </div>
  );
};

export default HomeRoute;

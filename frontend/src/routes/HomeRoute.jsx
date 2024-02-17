import {React, useState} from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const { photos, topics, updateFavPhotoList, photoSelect } = props

  const favPhotoList = updateFavPhotoList.favPhotoList;

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favPhotoList={favPhotoList}/>
      <PhotoList
        photos={photos}
        updateFavPhotoList={updateFavPhotoList}
        photoSelect={photoSelect}
      />
    </div>
  );
};

export default HomeRoute;

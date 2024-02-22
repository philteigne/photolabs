import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = ({ topics, favPhotoList, dispatch }) => {

  const isFavPhotoExist = favPhotoList.length !== 0 ? true : false;

  return (
    <div className="top-nav-bar">
      <h2 className="top-nav-bar__logo">PhotoLabs</h2>
      <TopicList topics={topics} dispatch={dispatch}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  )
}

export default TopNavigationBar;
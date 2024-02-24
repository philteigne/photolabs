import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import DarkMode from './DarkMode';

const TopNavigationBar = ({ topics, favPhotoList, dispatch, dark }) => {

  const isFavPhotoExist = favPhotoList.length !== 0 ? true : false;

  return (
    <div className={`top-nav-bar top-nav-bar-color${dark}`}>
      <h2 className={`top-nav-bar__logo top-nav-bar__logo-color${dark}`}>PhotoLabs</h2>
      <div className="top-nav-bar__icons">
        <TopicList topics={topics} dispatch={dispatch} dark={dark}/>
        <div onClick={() => dark ? dispatch({type: 'SET_DARK_MODE_OFF'}) : dispatch({type: 'SET_DARK_MODE_ON'})}>
        <DarkMode dark={dark} />
        </div>
        <FavBadge isFavPhotoExist={isFavPhotoExist} />

      </div>
    </div>
  )
}

export default TopNavigationBar;
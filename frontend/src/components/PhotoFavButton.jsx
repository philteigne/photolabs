import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


const PhotoFavButton = (props) => {

  const {id, favPhoto, favToggle} = props

  const favState = favPhoto.includes(id) ? true : false;

  return (
    <div className="photo-list__fav-icon" onClick={() => favToggle(id)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon className="photo-list__fav-icon-svg" selected={favState}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
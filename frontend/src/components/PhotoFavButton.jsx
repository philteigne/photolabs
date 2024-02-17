import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


const PhotoFavButton = (props) => {

  const {id, favControls} = props

  const {favToggle, favPhoto} = favControls

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
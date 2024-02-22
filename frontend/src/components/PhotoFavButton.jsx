import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


const PhotoFavButton = ({ id, favPhotoList, dispatch }) => {

  const favPhotoState = favPhotoList.includes(id) ? true : false;

  return (
    <div className="photo-list__fav-icon" onClick={() => favPhotoList.indexOf(id) === -1 ? dispatch({type:'FAV_PHOTO_ADDED', payload: id}) : dispatch({type:'FAV_PHOTO_REMOVED', payload: id})}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon className="photo-list__fav-icon-svg" selected={favPhotoState}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
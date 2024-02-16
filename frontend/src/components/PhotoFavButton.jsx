import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton() {
  
  const [favState, setFavState] = useState(false);
  
  const favPhoto = (favState) => {

    if (favState) {
      setFavState(false);
    }
    if (!favState) {
      setFavState(true);
    }
    
  }

  

  return (
    <div className="photo-list__fav-icon" onClick={() => favPhoto(favState)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon className="photo-list__fav-icon-svg" selected={favState}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
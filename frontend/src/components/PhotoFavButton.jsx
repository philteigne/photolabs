import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton() {
  
  const [favState, setFavState] = useState(false);
  
  const favPhoto = () => {
    setFavState(prevState => !prevState);
  }

  

  return (
    <div className="photo-list__fav-icon" onClick={favPhoto}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon className="photo-list__fav-icon-svg" selected={favState}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
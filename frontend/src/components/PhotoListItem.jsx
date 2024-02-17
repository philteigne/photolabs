import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const { photo, updateFavPhotoList, photoSelect } = props

  const id = photo.id
  
  return(
    <div className="photo-list">
      <div className="photo-list__item" key={id}>
        <PhotoFavButton id={id} updateFavPhotoList={updateFavPhotoList}/>
        <img
          src={photo.urls.regular}
          alt="Selected photograph"
          className="photo-list__image"
          onClick={() => photoSelect.onPhotoSelect(photo)}
        ></img> 
        <div className="photo-list__user-details">
          <img
          src={photo.user.profile}
          alt="Photographer profile image"
          className="photo-list__user-profile"
          ></img>
          <div className="photo-list__user-info">
            <p>{photo.user.name}</p>
            <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;

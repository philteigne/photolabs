import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const {photo, favPhoto, favToggle, modalControls} = props

  const id = photo.id
  
  return(
    <div className="photo-list">
      <div className="photo-list__item" key={id}>
        <PhotoFavButton id={id} favPhoto={favPhoto} favToggle={favToggle}/>
        <img
        src={photo.urls.regular}
        alt="Selected photograph"
        className="photo-list__image"
        onClick={() => {
          modalControls.toggleModal(true, photo);
          }
        }
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

import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  const {photo, id} = props

  return(
    <div className="photo-list">
      <div className="photo-list__item" key={id}>
        <img
        src={photo.imageSource}
        alt="Selected photograph"
        className="photo-list__image"
        ></img> 
        <div className="photo-list__user-details">
          <img
          src={photo.profile}
          alt="Photographer profile image"
          className="photo-list__user-profile"
          ></img>
          <div className="photo-list__user-info">
            <p>{photo.username}</p>
            <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;

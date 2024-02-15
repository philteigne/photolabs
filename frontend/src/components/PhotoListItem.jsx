import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  const {sampleDataForPhotoListItem} = props
  return(
    <div className="photo-list__item">
      <img
      src={sampleDataForPhotoListItem.imageSource}
      alt="Selected photograph"
      className="photo-list__image"
      ></img> 
      <div className="photo-list__user-details">
        <img
        src={sampleDataForPhotoListItem.profile}
        alt="Photographer profile image"
        className="photo-list__user-profile"
        ></img>
        <div className="photo-list__user-info">
          <p>{sampleDataForPhotoListItem.username}</p>
          <p className="photo-list__user-location">{sampleDataForPhotoListItem.location.city}, {sampleDataForPhotoListItem.location.country}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;

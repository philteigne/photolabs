import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  const {sampleDataForPhotoListItem} = props

  const photos = new Array(sampleDataForPhotoListItem, sampleDataForPhotoListItem, sampleDataForPhotoListItem)
 
  console.log(photos);
  const listOfPhotos = photos.map((photo) => {
  return(
    <div className="photo-list__item" key={photo.id}>
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
  )
  })

  console.log(listOfPhotos)

  return(
    <div className="photo-list">
      {listOfPhotos}
    </div>
  )
};

export default PhotoListItem;

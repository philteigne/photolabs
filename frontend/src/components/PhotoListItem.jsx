import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  return(
    <div>
      <img src={props.sampleDataForPhotoListItem.imageSource}></img>
      <div>
        <img src={props.sampleDataForPhotoListItem.profile}></img>
        <div>
          <h1>{props.sampleDataForPhotoListItem.username}</h1>
          <h2>{props.sampleDataForPhotoListItem.location.city}, {props.sampleDataForPhotoListItem.location.country}</h2>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;

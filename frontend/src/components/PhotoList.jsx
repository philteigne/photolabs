import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {

  const {photos, favPhoto, favToggle} = props

  return (
    <ul className="photo-list">
      {photos.map((photo, index) => {
        return(
          <PhotoListItem photo={photo} key={index} favPhoto={favPhoto} favToggle={favToggle}/>
        )
      })}
    </ul>
  );
};

export default PhotoList;

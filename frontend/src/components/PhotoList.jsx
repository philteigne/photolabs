import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {

  const {photos, favPhoto, favToggle} = props

  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        return(
          <PhotoListItem photo={photo} key={photo.id} favPhoto={favPhoto} favToggle={favToggle}/>
        )
      })}
    </ul>
  );
};

export default PhotoList;

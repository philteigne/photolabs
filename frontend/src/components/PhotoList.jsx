import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map((photo, index) => {
        return(
          <PhotoListItem photo={photo} key={index}/>
        )
      })}
    </ul>
  );
};

export default PhotoList;

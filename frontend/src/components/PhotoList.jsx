import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const {photos} = props
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

import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photoData, favPhotoList, dispatch }) => {

  return (
    <ul className="photo-list">
      {photoData.map((photo) => {
        return(
          <PhotoListItem
            photo={photo}
            key={photo.id}
            favPhotoList={favPhotoList}
            dispatch={dispatch}
          />
        )
      })}
    </ul>
  );
};

export default PhotoList;

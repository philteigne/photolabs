import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photoData, favPhotoList, dispatch, dark, modalDisplayState }) => {

  const modalState = modalDisplayState ? "-modal" : "";

  return (
    <ul className={`photo-list${modalState}`}>
      {photoData.map((photo) => {
        return(
          <PhotoListItem
            photo={photo}
            key={photo.id}
            favPhotoList={favPhotoList}
            dispatch={dispatch}
            dark={dark}
            modalDisplayState={modalDisplayState}
          />
        )
      })}
    </ul>
  );
};

export default PhotoList;

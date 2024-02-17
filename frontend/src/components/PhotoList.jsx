import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {

  const { photos, state, updateToFavPhotoIds, onPhotoSelect } = props
  

  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        return(
          <PhotoListItem
            photo={photo}
            key={photo.id}
            state={state}
            updateToFavPhotoIds={updateToFavPhotoIds}
            onPhotoSelect={onPhotoSelect}
          />
        )
      })}
    </ul>
  );
};

export default PhotoList;

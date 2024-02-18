import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {

  const { photos, state, dispatch } = props
  

  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        return(
          <PhotoListItem
            photo={photo}
            key={photo.id}
            state={state}
            dispatch={dispatch}
          />
        )
      })}
    </ul>
  );
};

export default PhotoList;

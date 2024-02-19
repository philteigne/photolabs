import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {

  const { state, dispatch } = props
  

  return (
    <ul className="photo-list">
      {state.photoData.map((photo) => {
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

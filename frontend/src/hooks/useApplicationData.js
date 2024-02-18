import { useState, useReducer } from "react";

export default function useApplicationData() {

  const updateToFavPhotoIdsReducer = (state, action) => {
    const index = state.indexOf(action);

    // photo is in favourites
    if (index > -1) {
      return favPhotoList.filter(photo => photo != photoID)
    }
    
    // photo is not in favourites
    if (index === -1) {
      return [...state, action]
    }
  }

  const selectedPhotoReducer = (state, action) => {
    return action;
  }
  
  // DECLARE STATES
  const [modalDisplayState, setModalDisplayState] = useState([]);

  const [selectedPhoto, setSelectedPhoto] = useState({});
  
  const [favPhotoList, setFavPhotoListState] = useReducer(updateToFavPhotoIdsReducer, []);


  // state
  const state = { modalDisplayState, selectedPhoto, favPhotoList }

  // onPhotoSelect
  // set modalDisplayState to true
  // set selectedPhoto to the selected photo object
  const onPhotoSelect = (photo) => {
    console.log("photo selected")
    setModalDisplayState(true);
    setSelectedPhoto(photo);
  }

  
  // onClosePhotoDetailsModal
  // set modalDisplayState to false
  const onClosePhotoDetailsModal = () => {
    setModalDisplayState(false);
  }

  return(
    {
      state,
      onPhotoSelect,
      setFavPhotoListState,
      onClosePhotoDetailsModal
    }
  )

} 


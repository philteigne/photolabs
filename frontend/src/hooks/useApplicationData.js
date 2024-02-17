import { useState } from "react";

export default function useApplicationData() {

  // DECLARE STATES
  const [modalDisplayState, setModalDisplayState] = useState(false);

  const [selectedPhoto, setSelectedPhoto] = useState({});
  
  const [favPhotoList, setFavPhotoListState] = useState([]);


  // state
  const state = { modalDisplayState, selectedPhoto, favPhotoList }

  // onPhotoSelect
  // set modalDisplayState to true
  // set selectedPhoto to the selected photo object
  const onPhotoSelect = (photo) => {
    setModalDisplayState(true);
    setSelectedPhoto(photo);
  }


  // updateToFavPhotoIds
  // add selected photo to favPhoto list
  const updateToFavPhotoIds = (photoID) => {

    const index = favPhotoList.indexOf(photoID)

    // photo is in favourites
    if (index > -1) {
      setFavPhotoListState(favPhotoList.filter(photo => photo != photoID))
    }

    // photo is not in favourites
    if (index === -1) {
      setFavPhotoListState([...favPhotoList, photoID])
    }
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
      updateToFavPhotoIds,
      onClosePhotoDetailsModal
    }
  )

} 


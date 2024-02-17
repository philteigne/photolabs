import {React, useState, useEffect} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';

import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {

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


  console.log("favPhotoList", favPhotoList);
  const updateFavPhotoList = {favPhotoList, updateToFavPhotoIds}
  const closePhotoDetailsModal = {modalDisplayState, onClosePhotoDetailsModal}
  const photoSelect = {selectedPhoto, modalDisplayState, onPhotoSelect}

  return(
  <div className="App">
    <HomeRoute
      photos={photos}
      topics={topics}
      state={state}
      updateToFavPhotoIds={updateToFavPhotoIds}
      onPhotoSelect={onPhotoSelect}
    />
    {modalDisplayState && <PhotoDetailsModal
                            state={state}
                            onClosePhotoDetailsModal={onClosePhotoDetailsModal}
                            updateToFavPhotoIds={updateToFavPhotoIds}
                            selectedPhoto={selectedPhoto}
                          />}
  </div>
  )
}

export default App;

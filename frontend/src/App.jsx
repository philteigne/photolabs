import {React, useState, useEffect} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';

import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    state,
    onPhotoSelect,
    setFavPhotoListState,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  // console.log(!state.modalDisplayState == false)

  return(
  <div className="App">
    <HomeRoute
      photos={photos}
      topics={topics}
      state={state}
      updateToFavPhotoIds={setFavPhotoListState}
      onPhotoSelect={onPhotoSelect}
    />
    {!state.modalDisplayState && <PhotoDetailsModal
                            state={state}
                            onClosePhotoDetailsModal={onClosePhotoDetailsModal}
                            updateToFavPhotoIds={setFavPhotoListState}
                          />}
  </div>
  )
}

export default App;

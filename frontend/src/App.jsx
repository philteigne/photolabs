import {React, useEffect} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';

import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';
import PostPhotoModal from 'routes/PostPhotoModal';



// Note: Rendering a single component to build components in isolation
const App = () => {

  const { state, dispatch } = useApplicationData();

  console.log(state);

  return(
  <div className={`App App-color${state.dark}`}>
    <HomeRoute
      photoData={state.photoData}
      topicData={state.topicData}
      favPhotoList={state.favPhotoList}
      dispatch={dispatch}
      dark={state.dark}
    />
    {state.modalDisplayState && <PhotoDetailsModal
                                  favPhotoList={state.favPhotoList}
                                  photoData={state.photoData}
                                  selectedPhoto={state.selectedPhoto}
                                  dispatch={dispatch}
                                  dark={state.dark}
                                  modalDisplayState={state.modalDisplayState}
                                />}
    {state.postPhotoModalDisplayState && <PostPhotoModal dispatch={dispatch} dark={state.dark} />}
  </div>
  )
}

export default App;

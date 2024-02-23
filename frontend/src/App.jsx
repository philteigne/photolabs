import {React, useEffect} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';

import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { ACTIONS, useApplicationData } from 'hooks/useApplicationData';

export const API_CALL_URL = "http://localhost:8001/api/"

// Note: Rendering a single component to build components in isolation
const App = () => {

  const { state, dispatch } = useApplicationData();

  // fetch photos from backend
  useEffect(() => {
    fetch(`${API_CALL_URL}photos`)
    .then((res) => res.json())
    .then(data => dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data}))
  }, []);

  // fetch topics from backend
  useEffect(() => {
    fetch(`${API_CALL_URL}topics/`)
    .then((res) => res.json())
    .then(data => dispatch({type:"SET_TOPIC_DATA", payload: data}))
  }, []);
  
  console.log("state.dark", state.dark)

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
                                />}
  </div>
  )
}

export default App;

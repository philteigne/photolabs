import {React, useEffect} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';

import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';
import PostPhotoModal from 'routes/PostPhotoModal';



// Note: Rendering a single component to build components in isolation
const App = () => {

  const { state, dispatch } = useApplicationData();

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

// {
//   "id":51,
//   "urls":{
//     "full":"http://localhost:8001/images/fashion-1-full.jpg",
//     "regular":"http://localhost:8001/images/fashion-1-regular.jpg"
//   },
//   "user":{
//     "username":"jdoe",
//     "name":"John Doe",
//     "profile":"http://localhost:8001/images/profile-1.jpg"
//   },
//   "location":{
//     "city":"Toronto",
//     "country":"Canada"
//   },
//   "similar_photos":[
//     {"id":52, "urls": {"full":"http://localhost:8001/images/fashion-2-full.jpg","regular":"http://localhost:8001/images/fashion-2-regular.jpg"},"user":{"username":"awond","name":"Alice Wonderland","profile":"http://localhost:8001/images/profile-2.jpg"},"location":{"city":"Vancouver","country":"Canada"}},{"id":53,"urls":{"full":"http://localhost:8001/images/fashion-3-full.jpg","regular":"http://localhost:8001/images/fashion-3-regular.jpg"},"user":{"username":"sitad","name":"Sita Dennis","profile":"http://localhost:8001/images/profile-3.jpg"},"location":{"city":"Calgary","country":"Canada"}},{"id":54,"urls":{"full":"http://localhost:8001/images/fashion-4-full.jpg","regular":"http://localhost:8001/images/fashion-4-regular.jpg"},"user":{"username":"matte","name":"Sasha Mateo","profile":"http://localhost:8001/images/profile-4.jpg"},"location":{"city":"Victoria","country":"Canada"}},{"id":55,"urls":{"full":"http://localhost:8001/images/fashion-5-full.jpg","regular":"http://localhost:8001/images/fashion-5-regular.jpg"},"user":{"username":"anita","name":"Anita Austi","profile":"http://localhost:8001/images/profile-5.jpg"},"location":{"city":"Ottawa","country":"Canada"}},{"id":56,"urls":{"full":"http://localhost:8001/images/fashion-6-full.jpg","regular":"http://localhost:8001/images/fashion-6-regular.jpg"},"user":{"username":"lsouza","name":"Lukas Souza","profile":"http://localhost:8001/images/profile-6.jpg"},"location":{"city":"Montreal","country":"Canada"}},{"id":57,"urls":{"full":"http://localhost:8001/images/fashion-7-full.jpg","regular":"http://localhost:8001/images/fashion-7-regular.jpg"},"user":{"username":"josea","name":"Jose Alejandro","profile":"http://localhost:8001/images/profile-7.jpg"},"location":{"city":"Toronto","country":"Canada"}},{"id":58,"urls":{"full":"http://localhost:8001/images/fashion-8-full.jpg","regular":"http://localhost:8001/images/fashion-8-regular.jpg"},"user":{"username":"jdwayne","name":"Dwayne Jacob","profile":"http://localhost:8001/images/profile-8.jpg"},"location":{"city":"Vancouver","country":"Canada"}},{"id":59,"urls":{"full":"http://localhost:8001/images/fashion-9-full.jpg","regular":"http://localhost:8001/images/fashion-9-regular.jpg"},"user":{"username":"saeng","name":"Allison Saeng","profile":"http://localhost:8001/images/profile-9.jpg"},"location":{"city":"Calgary","country":"Canada"}}
//   ]
// }

export default App;

import {React, useState} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';

import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [modalDisplayState, setModalDisplayState] = useState({state: false, photo: {}});

  const toggleModal = (state, photo) => {
    setModalDisplayState({state: state, photo: photo})
  }

  const modalControls = {modalDisplayState, toggleModal};

  return(
  <div className="App">
    <HomeRoute photos={photos} topics={topics} modalControls={modalControls}/>
    {modalDisplayState.state && <PhotoDetailsModal modalControls={modalControls} />}
  </div>
  )
}

export default App;

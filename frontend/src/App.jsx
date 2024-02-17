import {React, useState} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';

import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [modalDisplayState, setModalDisplayState] = useState(false);

  const toggleModal = (buttonType) => {
    if (buttonType === 'photo') {
      setModalDisplayState(true);
    }
    if (buttonType === 'close') {
      setModalDisplayState(false);
    }
  }

  const modalControls = {modalDisplayState, toggleModal};

  return(
  <div className="App">
    <HomeRoute photos={photos} topics={topics} modalControls={modalControls}/>
    {modalDisplayState && <PhotoDetailsModal modalControls={modalControls} />}
  </div>
  )
}

export default App;

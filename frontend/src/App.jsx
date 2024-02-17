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

  const [favPhoto, setFavState] = useState([]);

  const favToggle = (photoID) => {

    const index = favPhoto.indexOf(photoID)

    // photo is in favourites
    if (index > -1) {
      setFavState(favPhoto.filter(photo => photo != photoID))
    }

    // photo is not in favourites
    if (index === -1) {
      setFavState([...favPhoto, photoID])
    }
  }

  const favControls = {favPhoto, favToggle}

  return(
  <div className="App">
    <HomeRoute photos={photos} topics={topics} modalControls={modalControls} favControls={favControls}/>
    {modalDisplayState.state && <PhotoDetailsModal photos={photos} modalControls={modalControls} favControls={favControls}/>}
  </div>
  )
}

export default App;

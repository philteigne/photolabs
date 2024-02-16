import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const photos = new Array(sampleDataForPhotoListItem, sampleDataForPhotoListItem, sampleDataForPhotoListItem)

// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const listOfPhotos = photos.map((photo, index) => {
    return <PhotoListItem photo={photo} key={index} />
  })
  
  return (
    <div className="App">
      {listOfPhotos}
    </div>
  );
};

export default App;

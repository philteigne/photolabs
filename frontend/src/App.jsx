import React from 'react';

import PhotoList from 'components/PhotoList';
import './App.scss';


// const photos = new Array(sampleDataForPhotoListItem, sampleDataForPhotoListItem, sampleDataForPhotoListItem)

// Note: Rendering a single component to build components in isolation
const App = () => (
  <div className="App">
    {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
    <PhotoList/>
  </div>
)

export default App;

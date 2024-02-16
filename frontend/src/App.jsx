import React from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';


// const photos = new Array(sampleDataForPhotoListItem, sampleDataForPhotoListItem, sampleDataForPhotoListItem)

// Note: Rendering a single component to build components in isolation
const App = () => (
  <div className="App">
    <HomeRoute />
  </div>
)

export default App;

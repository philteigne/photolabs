import {React, useState} from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const { photos, topics } = props

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

  console.log(favPhoto);

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics}/>
      <PhotoList photos={photos} favPhoto={favPhoto} favToggle={favToggle}/>
    </div>
  );
};

export default HomeRoute;

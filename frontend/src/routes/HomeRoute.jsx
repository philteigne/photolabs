import {React} from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ photoData, topicData, favPhotoList, dispatch, dark, modalDisplayState }) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={topicData} favPhotoList={favPhotoList} dispatch={dispatch} dark={dark}/>
      <PhotoList
        photoData={photoData}
        favPhotoList={favPhotoList}
        dispatch={dispatch}
        dark={dark}
        modalDisplayState={modalDisplayState}
      />
    </div>
  );
};

export default HomeRoute;
